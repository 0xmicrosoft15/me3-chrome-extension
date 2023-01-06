import _ from 'lodash'
import url from 'url'
import { Readable } from 'stream'
import { google } from 'googleapis'

const SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
]

class Google {
    _auth
    _drive
    _redirectUrl

/**
 * @param {string} clientId 
 * @param {string} clientSecret 
 * @param {[string]} redirectUrls 
 */
  constructor(clientId, clientSecret, redirectUrls ) {
    this._redirectUrl = redirectUrls[0]
    this._auth = new google.auth.OAuth2(
      clientId,
      clientSecret,
      this._redirectUrl
    )

    google.options({ auth: this._auth })
    this._drive = google.drive({ version: 'v3' })
  }

  generateAuthUrl() {
    return this._auth.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    })
  }
/**
 * @param {string} redirectUrl 
 * @returns {boolean}
 */
  async getTokens(redirectUrl) {
    let code = redirectUrl
    if (
      _.startsWith(redirectUrl, 'https://') ||
      _.startsWith(redirectUrl, 'http://')
    ) {
      if (!_.startsWith(redirectUrl, this._redirectUrl)) return false

      const { query } = url.parse(redirectUrl, true)
      code = _.get(query, 'code')
    }
    if (_.isEmpty(code)) return false

    const { tokens } = await this._auth.getToken(code)
    console.log(tokens)
    this._auth.setCredentials(tokens)
    return true
  }

  async getUserEmail() {
    const googleAuth = google.oauth2({ version: 'v2' })
    const { data } = await googleAuth.userinfo.get()
    return data.email
  }
/**
 * @param {any} body 
 * @param {string} fileName 
 * @param {string} mimeType 
 * @returns 
 */
  async saveFiles(body, fileName, mimeType) {
    const file = await this._drive.files.create({
      requestBody: {
        name: fileName,
      },
      media: {
        mimeType,
        body,
      },
      fields: 'id',
    })
    return file.data.id
  }
/**
 * @param {string} fileId 
 * @returns {Promise<any>}
 */
  async loadFile(fileId) {
    const file = await this._drive.files.get({
      fileId,
      alt: 'media',
    })
    return file.data
  }
/**
 * @param {string} base64 
 * @returns 
 */
  b642Readable(base64) {
    return Readable.from(Buffer.from(base64, 'base64'))
  }
/**
 * @param {string} str 
 * @returns 
 */
  str2Readable(str) {
    return Readable.from(str, { encoding: 'utf8' })
  }
}

export const googleInstance = new Google(
    "481242808170-q83c0q6apdgi7oedo1gv9dv1fmn3m09j.apps.googleusercontent.com",
    "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",
    ["http://localhost:3000"])
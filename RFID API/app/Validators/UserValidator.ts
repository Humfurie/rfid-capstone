import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    firstName: schema.string(),
    middleName: schema.string(),
    lastName: schema.string(),
    birthdate: schema.string(),
    gender: schema.string({ trim: true }),
    address: schema.string(),
    email: schema.string({ trim: true }, [rules.email()]),
    contactNumber: schema.string({ trim: true }),
    facebook: schema.string({ trim: true }),
    idNumber: schema.string({ trim: true }),
    rfidNumber: schema.string({ trim: true }),
    isAlumni: schema.boolean(),
    emergencyName: schema.string(),
    emergencyContactNumber: schema.string({ trim: true }),
    emergencyEmail: schema.string({ trim: true }, [rules.email()]),
    emergencyFacebook: schema.string({ trim: true }),
    // role: schema.string({ trim: true })
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}

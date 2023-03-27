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
    birthdate: schema.date(),
    gender: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]),
    address: schema.string(),
    contactNumber: schema.string({ trim: true }),
    facebook: schema.string({ trim: true }),
    // idNumber: schema.string({ trim: true }, [rules.minLength(8), rules.unique({ table: 'users', column: 'id_number', caseInsensitive: true })]),
    // rfidNumber: schema.string({ trim: true }, [rules.minLength(12), rules.unique({ table: 'users', column: 'rfid_number', caseInsensitive: true })]),
    isAlumni: schema.boolean(),
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

import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import View from '@ioc:Adonis/Core/View'
import mjml from 'mjml'

type Payload = {
  firstName: string
  orderNumber: string
  orderDate: string
  totalPrice: string
  companyName: string
}

export default class TestMjml extends BaseMailer {
  constructor(private payload: Payload) {
    super()
  }

  private html = mjml(View.renderSync('emails/test_mjml', { payload: this.payload })).html

  public prepare(message: MessageContract) {
    message.subject('Testing the MJML').from('admin@email.com').to('user@email.com').html(this.html)
  }
}

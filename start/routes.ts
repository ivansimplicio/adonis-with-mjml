import Route from '@ioc:Adonis/Core/Route'
import TestMjml from 'App/Mailers/TestMjml'

Route.get('/send', async () => {
  await new TestMjml({
    firstName: 'User Test',
    orderNumber: '00112233',
    orderDate: '01/01/2022',
    totalPrice: 'R$ 1999,99',
    companyName: 'Adonis With MJML',
  }).sendLater()
  return { email: 'sent' }
})

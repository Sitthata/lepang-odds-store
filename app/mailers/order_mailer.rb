class OrderMailer < ApplicationMailer
  def order_confirmation(order)
    @order = order
    mail to: "aprils96950@gmail.com", subject: "Order Confirmation"
  end
end

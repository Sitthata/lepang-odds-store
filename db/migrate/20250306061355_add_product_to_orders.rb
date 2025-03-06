class AddProductToOrders < ActiveRecord::Migration[8.0]
  def change
    add_reference :orders, :product, null: true, foreign_key: true
  end
end

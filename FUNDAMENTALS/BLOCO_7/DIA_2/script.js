// Parte 1

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const output = `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;

  return output;
}

console.log(customerInfo(order)); 
//"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = 'Luiz Silva';
  order.name = newBuyer;

  const orderedPizzas = Object.keys(order.order.pizza);

  const newTotal = 50;
  order.payment.total = newTotal;

  return `Olá ${order.name}, o total do seu pedido de ${orderedPizzas} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`

}

console.log(orderModifier(order));

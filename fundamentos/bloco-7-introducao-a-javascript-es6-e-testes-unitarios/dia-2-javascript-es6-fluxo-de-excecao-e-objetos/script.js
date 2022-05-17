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
      marguerita: {
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
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apt = order.address.apartment;
  
 return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, ${rua}, Nº: ${numero}, AP: ${apt}`
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const nome = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const pagamento = order.payment.total;

  return `Olá ${nome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${pagamento},00.`
}

orderModifier(order);

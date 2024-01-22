class customer {
    account = null;
    constructor(id, address, phone, email) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    setAccount(account) {
        this.account = account;
    }
}


class webUser {
    customer = null;
    shoppingCart = null;
    constructor(login, password, state) {
        this.login = login;
        this.password = password;
        this.state = state;
    }
}

class shoppingCart {
    account = null;
    lineItem = [];
    constructor(created) {
        this.created = created;
    }
}

class account {
    shoppingCart = null;
    payments = [];
    order = [];
    constructor(id, billing_address, is_close, open, close) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_close = is_close;
        this.open = open;
        this.close = close;
    }
    setShoppingCart(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    setPayment(payment) {
        this.payments.push(payment);
    }
    addOrder(order) {
        this.orders.push(order);
    }
}

class order {
    lineItem = [];
    payment = null;
    total = 0;
    shipped="";
    constructor(number, ordered, shipped, ship_to, status, total) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status; 
        this.total = total;
    }
    setPayment(payment) {
        this.payment = payment;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
    calctotal(){
        let total = 0
        for(let i = 0; i < this.lineItems.length; i++) {
            
            total+= this.lineItems[i].quanity*this.lineItems[i].price
        } 
        this.total = total;
    }
    setShippedDate(date) {
        this.shipped = date;
    }
}

class payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
}

class lineItem {
    product = null;
    constructor(quanity, price) {
        this.quanity = quanity;
        this.price = price;
    }
    setProduct(product) {
        this.product = product;
    }
}

class product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
}

//Enumeration (enum)
class UserState{
    static NEW = new UserState("new_user");
    static ACTIVE = new UserState("active");
    static BLOCKED = new UserState("blocked");
    static BANNED = new UserState("banned");
    constructor(name) {
        this.name = name;
    }
}

const main = () =>{

    //Create User webUser
    const user1 = new webUser("user1","123456", UserState.NEW);
    const user2 = new webUser("user2","456789",UserState.ACTIVE);
    
    //Create Product
    const product1 = new webUser("p01", "Pen", "tannyball");
    const product2 = new webUser("p02", "Pen Corrector", "tannyball");
    const product3 = new webUser("p03", "Pen Ink", "Pensan");
    const product4 = new webUser("p04", "Marker pen", "tanner mark");
    const product5 = new webUser("p05", "Golden pen", "Vick's Premuim");
    //
    //Create Order
    const order1 = new order("01", "26/01/2567", "Tanny's house", orderStatus.CLOSED);

    const lineItem1 = new lineItem(10, 15);
    lineItem1.setProduct(Pen);
    const lineItem2 = new lineItem(10, 15);
    lineItem2.setProduct(PenCorrector);
    const lineItem3 = new lineItem(6, 5);
    lineItem3.setProduct(PenInk);

    //Order
    order1.addLineItem(lineItem1);
    order1.addLineItem(lineItem2);
    order1.addLineItem(lineItem3);

    order1.setTotal();

    order1.setShippedDate("30/01/2567");
  
    const payment1 = new payment("p01", "22/02/2567", order1.total, "ส่งที่หอ");
    order1.setPayment(payment1);
    console.log(order1);

    console.log(user1);
};
main();


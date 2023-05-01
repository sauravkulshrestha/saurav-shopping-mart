// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {

  const products = [
    {
      "Item": "Phone",
      "Name": "Apple iPhone",
      "Quantity": 0,
      "Price": 90000
    },
    {
      "Item": "Phone",
      "Name": "Samsung Galaxy",
      "Quantity": 0,
      "Price": 20000

    },
    {
      "Item": "Laptop",
      "Name": "Dell VivoBook",
      "Quantity": 0,
      "Price": 50000

    },
    {
      "Item": "Monitor",
      "Name": "one Plus Monitor",
      "Quantity": 0,
      "Price": 11000

    },
    {
      "Item": "Speakers",
      "Name": "JBL Speakers",
      "Quantity": 0,
      "Price": 8000

    },
  ]

  let [productList, setProductList] = useState(products);
  let [finalAmount, setAmount] = useState(0);
  let [productListLength, setProductListLength] = useState(products.length);

  const incrementQuantity = (index) => {

    let newproductList = [...productList];
    let newFinalAmount = finalAmount;
    if (newproductList[index].Quantity < 10) {
      newproductList[index].Quantity++;
      newFinalAmount += newproductList[index].Price;
      setProductList(newproductList);
      setAmount(newFinalAmount);
    }

  }

  const removeItem = (index) => {
    let newRemoveItemList = [...productList];
    let newAmountToReduce = finalAmount;
    let newProductListLength = productListLength;
    newAmountToReduce -= newRemoveItemList[index].Quantity * newRemoveItemList[index].Price;
    newRemoveItemList.splice(index, 1);
    newProductListLength--;
    setProductList(newRemoveItemList);
    setAmount(newAmountToReduce);
    setProductListLength(newProductListLength);
  }

  const resetBtnPressed = () => {
    let newResetProductList = [...productList];
    newResetProductList.forEach(product => {
      product.Quantity = 0;
    });
    setProductList(newResetProductList);
    setAmount(0);
  }

  const decrementQuantity = (index) => {

    let newproductList = [...productList];
    let newFinalAmount = finalAmount;
    if (newproductList[index].Quantity >= 1) {
      newproductList[index].Quantity--;
      newFinalAmount -= newproductList[index].Price;
      setProductList(newproductList);
      setAmount(newFinalAmount);

    }

  }




  return (
    <>
      <Navbar ProductListLength={productListLength} />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} removeItem={removeItem} decrementQuantity={decrementQuantity} />
        <button className='col-2 btn btn-primary mt-5'> Add Item</button>
      </main>
      <Footer finalAmount={finalAmount} resetBtnPressed={resetBtnPressed} />
       

    </>
  );
}

export default App;

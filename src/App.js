// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';


function App() {


  let products = JSON.parse(window.localStorage.getItem("ProductList"));
  let [productList, setProductList] = useState(products);
  let [finalAmount, setAmount] = useState(0);
  let [productListLength, setProductListLength] = useState(products.length);
  let [showItemForm, setShowForm] = useState(Boolean);

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


  const addItem = (name, price) => {
    console.log(price);

    let newAddItemList = [...productList];
    let newProductListLength = productListLength;

    newAddItemList.push(
      {
        "Item": "laptop",
        "Name": name,
        "Quantity": 0,
        "Price": price
      }
    );
    newProductListLength++;
    window.localStorage.setItem("ProductList", JSON.stringify(newAddItemList));

    setProductList(newAddItemList);
    setProductListLength(newProductListLength);

  }

  const removeItem = (index) => {
    let newRemoveItemList = [...productList];
    let newAmountToReduce = finalAmount;
    let newProductListLength = productListLength;
    newAmountToReduce -= newRemoveItemList[index].Quantity * newRemoveItemList[index].Price;
    newRemoveItemList.splice(index, 1);
    newProductListLength--;
    setProductList(newRemoveItemList);
    window.localStorage.setItem("ProductList", JSON.stringify(newRemoveItemList));
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
  const toggleShowForm = () =>{
    let newshowItemForm = showItemForm;
    newshowItemForm = !newshowItemForm;
    setShowForm(newshowItemForm);
  }




  return (
    <>
      <Navbar ProductListLength={productListLength} />
      <button className='col-2 btn btn-primary mt-5' onClick={() => { 
        toggleShowForm();
      }}> Add Item To cart</button>
      {showItemForm == true ? <AddItem addItem={addItem}/> : ""}
      
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} removeItem={removeItem} decrementQuantity={decrementQuantity} />
      </main>
      <Footer finalAmount={finalAmount} resetBtnPressed={resetBtnPressed} />


    </>
  );
}

export default App;

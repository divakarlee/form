
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
 import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  width: 100vw;
`;

const FormContainer = styled.div`
  width: 50vw;
  padding: 20px;
  box-sizing: border-box;
`;

const VendorListContainer = styled.div`
  width: 50vw;
  padding: 20px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const VendorList = styled.ul`
  list-style: none;
  padding: 0;
`;

const VendorListItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

const Data = () => {
    const navigate=useNavigate();
  const [formValues, setFormValues] = useState({
    vendorName: '',
    bankAccountNo: '',
    bankName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const [vendorList, setVendorList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddVendor = (e) => {
    e.preventDefault();
    setVendorList([...vendorList, { ...formValues }]);
    setFormValues({
      vendorName: '',
      bankAccountNo: '',
      bankName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      zipCode: '',
    });
  };

  const handleDeleteVendor = (index) => {
    const updatedVendorList = [...vendorList];
    updatedVendorList.splice(index, 1);
    setVendorList(updatedVendorList);
  };

  const token=localStorage.getItem("token");
  if(!token){
    navigate("/");
  }
  return (
     
      <Container>
        <div>
        <h1>Add vendor details</h1>
        </div>
        <FormContainer>
          <Form onSubmit={handleAddVendor}>
            <Input type="text" name="vendorName" placeholder="Vendor Name" value={formValues.vendorName} onChange={handleInputChange} />
            <Input type="text" name="bankAccountNo" placeholder="Bank Account No" value={formValues.bankAccountNo} onChange={handleInputChange} />
            <Input type="text" name="bankName" placeholder="Bank Name" value={formValues.bankName} onChange={handleInputChange} />
            <Input type="text" name="addressLine1" placeholder="Address Line 1" value={formValues.addressLine1} onChange={handleInputChange} />
            <Input type="text" name="addressLine2" placeholder="Address Line 2" value={formValues.addressLine2} onChange={handleInputChange} />
            <Input type="text" name="city" placeholder="City" value={formValues.city} onChange={handleInputChange} />
            <Input type="text" name="country" placeholder="Country" value={formValues.country} onChange={handleInputChange} />
            <Input type="text" name="zipCode" placeholder="Zip Code" value={formValues.zipCode} onChange={handleInputChange} />
            <Button type="submit">Add Vendor</Button>
          </Form>
        </FormContainer>

        <VendorListContainer>
          <h2>Vendor List</h2>
          <VendorList>
            {vendorList.map((vendor, index) => (
              <VendorListItem key={index}>
                <div>
                  <strong>name:{vendor.vendorName}</strong>
                  <p>Acc:{vendor.bankAccountNo}</p>
                  <p>bank:{vendor.bankName}</p>
                </div>
                <div>
                   
                  <DeleteButton onClick={() => handleDeleteVendor(index)}>
                    Delete
                  </DeleteButton>
                </div>
              </VendorListItem>
            ))}
          </VendorList>
        </VendorListContainer>

 
      </Container>
     
  );
};

export default Data;
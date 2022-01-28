import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  useGetProduct,
  ProductDTO,
  useUpdateProduct,
} from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";
import toasts from "../../components/toasts";
import UpdateMethods from "../../api/updateMethods";

function ProductEdit() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(productId!);
  const { error: putError, data: puttedData, update } = useUpdateProduct();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  useEffect(() => {
    if (putError) {
      failToast(putError);
    }
    if (puttedData) {
      succesToast(`Item with id: ${puttedData.id} updated!`);
      navigate(`/products/admin`);
    }
  }, [putError, puttedData]);

  const handleSubmit = (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };

    update(UpdateMethods.PUT, formattedData, formattedData.id);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {product && (
        <ProductForm
          title="EDIT PRODUCT"
          gridTemplateAreas={gridTemplateAreas}
          initialData={product}
          onSubmit={handleSubmit}
          mt="2rem"
          mx="auto"
        />
      )}
    </>
  );
}

export default ProductEdit;

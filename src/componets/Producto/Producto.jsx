import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/productos/")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageClick = (producto) => {
    setSelectedProduct(producto);
    setModalVisible(true);
  };

  return (
    <div className="mt-5">
      <h3 className="mb-3 text-primary">Lista de productos</h3>
      <table className="mt-5 table table-bordered shadow table-striped">
        <thead className='thead-dark'>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.codigo}>
              <td>{producto.nombre}</td>
              <td>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={100}
                  onClick={() => handleImageClick(producto)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div className="modal" style={{ display: modalVisible ? "block" : "none" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.nombre}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModalVisible(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Código: {selectedProduct.codigo}</p>
                <p>Nombre: {selectedProduct.nombre}</p>
                <p>Precio: s/. {selectedProduct.precio}</p>
                <img
                  src={selectedProduct.imagen}
                  alt={selectedProduct.nombre}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Producto;

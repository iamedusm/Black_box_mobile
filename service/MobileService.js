import axios from 'axios';

const BASE_URL = 'https://black-box-69d64-default-rtdb.firebaseio.com';

const listProducts = async () => {
  try {
    const produtos = [];
    const response = await axios.get(`${BASE_URL}/produtos.json`);
    for (key in response.data) {
      produtos.push({ id: key, ...response.data[key] });
    }
    return produtos;
  } catch (error) {
    console.log(error);
  }
};

const listarPeloId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/produtos/${id}.json`);
    return { id, ...response.data };
  } catch (error) {
    console.log(error);
  }
};

const incluirProduto = async (nome, qtd, marca, precoCusto, precoVenda) => {
  try {
    const dados = {
      nome,
      qtd,
      marca,
      precoCusto,
      precoVenda,
    };
    const response = await axios.post(`${BASE_URL}/produtos.json`, dados);
    return {
      id: response.data.key,
      nome,
      qtd,
      marca,
      precoCusto,
      precoVenda,
    };
  } catch (error) {
    console.log(error);
  }
};

const editarProduto = async (id, dados) => {
  try {
    const response = await axios.put(`${BASE_URL}/produtos/${id}.json`, dados);
    return { id, ...response.data };
  } catch (error) {
    console.log(error);
  }
};

const deletarProduto = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/produtos/${id}.json`);
    } catch (error) {
      console.log(error);
    }
  };

export { incluirProduto, listProducts, editarProduto, listarPeloId, deletarProduto };

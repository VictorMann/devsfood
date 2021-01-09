import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../helpers/api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = 0;
let timerEffect = false;

function Home() {
    
    const [search, setSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    const [totalPages, setTotalPages] = useState(1);
    const [activePage, setActivePage] = useState(1);
    
    const [activeModal, setActiveModal] = useState(false);
    const [dataModalProduct, setDataModalProduct] = useState({});


    const [activeCategory, setActiveCategory] = useState('');

    let CategoryItemPrimary = {
        id: '',
        name: 'Todas as categorias',
        image: '/images/food-and-restaurant.png'
    };

    const getProducts = () => {
        api.getProducts(activeCategory, activePage, activeSearch)
        .then(data => {
            if (data.error) alert(data.error);
            else {
                setProducts(data.result.data);
                setTotalPages(data.result.pages);
            }
        })
    };

    const attrsProductItem = data => ({
        onClick(e) {
            setActiveModal(true);
            setDataModalProduct(data);
        }
    });

    useEffect(() => {
        api.getCategories()
        .then(data => {
            if (data.error) alert(data.error);
            else setCategories(data.result);
            ReactTooltip.rebuild();
        });
    }, []);

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            if (search !== activeSearch) setActiveSearch(search);
        }, 1500);
    }, [search]);

    useEffect(() => {
        if (timerEffect) {
            setProducts([]);
            getProducts();
        }
        timerEffect = true;
    }, [activePage]);

    
    useEffect(() => {
        setActivePage(1);
        setProducts([]);
        getProducts();
    }, [activeCategory, activeSearch]);

    return (
        <PageArea>
            <Header search={search} setSearch={setSearch} />
            {categories.length > 0 &&
                <div className="category-area">
                    <h4>Selecione uma categoria</h4>
                        <div className="category-list">
                            <CategoryItem 
                                data={CategoryItemPrimary}
                                active={activeCategory}
                                setActive={setActiveCategory} />
                            {categories.map((item, k) =>
                                <CategoryItem 
                                    key={k} 
                                    data={item}
                                    active={activeCategory}
                                    setActive={setActiveCategory} />
                            )}
                        </div>
                </div>
            }
            {products.length > 0 &&
                <div className="product-area">
                    <div className="product-list">
                        {products.map((item, k) => 
                            <ProductItem 
                                key={k}
                                data={item}
                                attrs={attrsProductItem(item)} />
                        )}
                    </div>
                </div>
            }
            {totalPages > 1 &&
                <div className="pagination-area">
                    <Pagination
                        page={activePage}
                        setPage={setActivePage}
                        totalPages={totalPages} />
                </div>
            }
            <Modal
                active={activeModal}
                setActive={setActiveModal}>
                    
                   <ModalProduct 
                        data={dataModalProduct}
                        setActive={setActiveModal} />
            </Modal>
        </PageArea>
    )
}

export default Home;
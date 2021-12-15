import { Input } from "antd";
import { memo, useEffect, useState } from "react";
import './css/headerSearch.scss';
import HeaderSearchArea from "./headerSearchArea";
import { FaSearch } from 'react-icons/fa';

const mockData = [
    {
        id: 1, name: "Ann Liebmann", number: "+27-61-453-5444",
        email: "ann.lieb@blabla.com", policyNumber1: "0013983997", policyNumber2: "0013983997"
    },
    {
        id: 2, name: "Ann Summer", number: "+27-61-453-5444",
        email: "ann.summer@blabla.com", policyNumber1: "0113983997", policyNumber2: "0113983997"
    },
    {
        id: 3, name: "Annabelle Samuel", number: "+27-61-453-5444",
        email: "ann.samuel@blabla.com", policyNumber1: "0213983997", policyNumber2: "0213983997"
    },
]

const HeaderSearch = memo(() => {
    const [searchValue, setSearchValue] = useState()
    const [filteredList, setFilteredList] = useState()

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch(searchValue)
        }, 300)

        return () => clearTimeout(delayDebounceFn)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])


    const handleSearch = (searchValue) => {
        if (!searchValue || searchValue.length < 3) {
            setFilteredList(null)
        } else {
            const searchSimple = searchValue.toLowerCase()
            //Api call and return simulated 
            const filteredData = mockData.filter(({ name, email, number, policyNumber1, policyNumber2 }) => {
                let finded = false
                if (name.toLowerCase().includes(searchSimple))
                    finded = true
                if (email.toLowerCase().includes(searchSimple))
                    finded = true
                if (number.toLowerCase().includes(searchSimple))
                    finded = true
                if (policyNumber1.toLowerCase().includes(searchSimple))
                    finded = true
                if (policyNumber2.toLowerCase().includes(searchSimple))
                    finded = true
                return finded
            })

            setFilteredList(filteredData)
        }
    }


    return (
        <div className="headerSearch">
            <FaSearch color="#b4b4b4" className="headerSearch__icon" />
            <Input className="headerSearch__input"
                placeholder="SEARCH (Client Name / Policy Number)"
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <HeaderSearchArea filteredList={filteredList} />
        </div>
    );
});

export default HeaderSearch;

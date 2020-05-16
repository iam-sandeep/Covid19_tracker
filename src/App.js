import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker'


import {Cards, Chart, CountryPicker} from './components';

import styles from './App.module.css';

import { fetchData } from './api';

import image from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange =   async (country) => {
        const fetchedData = await fetchData(country);

        console.log(fetchData);

        this.setState({ data: fetchedData, country: country });


        //fetched the data




        //set the data
    }

    render(){

        const { data, country } = this.state;

        return (
        <div className={styles.container}>
           <img className={styles.image} src ={image} alt="COVID-19" />
           <Cards data={data} />
           <CountryPicker handleCountryChange={this.handleCountryChange}/>
           <Chart  data={data} country={country}/>
           <h3>Developed by Sandeep Sharma</h3>

        </div>
        );
            
        
    }

}

export default App;

import React, { Component } from 'react';

class CancionesFiltros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ocasionFilter: '',
            animoFilter: '',
            climaFilter: ''
        };
    }

    handleFilterChange = (filterName, value) => {
        this.setState({ [filterName]: value });
    }

    applyFilters = () => {
        const { ocasionFilter, animoFilter, climaFilter } = this.state;
        // Llamar a una función pasada por props para aplicar los filtros
        this.props.onApplyFilters({ ocasionFilter, animoFilter, climaFilter });
    }

    render() {
        // Renderizar los selectores de filtro como lo hicimos anteriormente
        // y agregar los manejadores de eventos para actualizar los estados.
    }
}

export default CancionesFiltros;

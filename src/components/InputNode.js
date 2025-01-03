import React from 'react';

const InputNode = ({ data }) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.header}>Input Node</h3>
            <h1 style={styles.subHeader}>Write the input/question you want to ask</h1>
            <input 
                type="text" 
                placeholder="Type Something......"
                onChange={data.onChange} 
                style={styles.input} 
            />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '325px',
        height: '288px',
        margin: '0px auto',
    },
    header: {
        fontSize: '24px',
        color: '#333',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: '16px',
        color: '#555',
        textAlign: 'center',
        marginBottom: '13px',
        backgroundColor: '#EEF4FF',
        width: '324px',
        height: '48.28px',
        opacity: '0.8', 
    },
    input: {
        width: '291.54px',
        height: '40.56ox',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4.34px',
        border: '1px solid #ccc',
        outline: 'none',
    }
};

export default InputNode;

import React from 'react';

const OutputNode = ({ output }) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.header}>Output Node</h3>
            <div style={styles.outputContainer}>
                <p>{output}</p>
            </div>
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
        padding: '20px',
    },
    header: {
        fontSize: '24px',
        color: '#333',
        textAlign: 'center',
    },
    outputContainer: {
        width: '291.54px',
        height: '40.56ox',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4.34px',
        border: '1px solid #ccc',
        outline: 'none',
    },
};

export default OutputNode;

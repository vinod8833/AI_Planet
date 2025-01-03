import React, { useState } from 'react';

const LLMNode = ({ data }) => {
    const [apiKey, setApiKey] = useState('');
    const [maxTokens, setMaxTokens] = useState('');
    const [temperature, setTemperature] = useState('');
    const [model, setModel] = useState('gpt-3.5');
    const [apiBase, setApiBase] = useState('');

    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
        data.onApiKeyChange(e.target.value); 
    };

    const handleMaxTokensChange = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setMaxTokens(value);
            data.onMaxTokensChange(value);
        }
    };

    const handleTemperatureChange = (e) => {
        const value = e.target.value;
        setTemperature(value);
        data.onTemperatureChange(value); 
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
        data.onModelChange(e.target.value); 
    };

    const handleApiBaseChange = (e) => {
        setApiBase(e.target.value);
        data.onApiBaseChange(e.target.value); 
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>LLM Node</h3>

            {/* Model Dropdown */}
            <div style={styles.inputContainer}>
                <label htmlFor="model" style={styles.label}>Model Name</label>
                <select
                    id="model"
                    value={model}
                    onChange={handleModelChange}
                    style={styles.input}
                    aria-label="Select Model"
                >
                    <option value="gpt-3.5">GPT-3.5</option>
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3">GPT-3</option>
                    <option value="davinci">Davinci</option>
                </select>
            </div>

            {/* OpenAI API Base */}
            <div style={styles.inputContainer}>
                <label htmlFor="apiBase" style={styles.label}>OpenAI API Base:</label>
                <input 
                    type="text" 
                    id="apiBase"
                    placeholder="Enter OpenAI API Base URL"
                    value={apiBase}
                    onChange={handleApiBaseChange} 
                    style={styles.input} 
                    aria-label="OpenAI API Base URL"
                />
            </div>

            {/* OpenAI API Key */}
            <div style={styles.inputContainer}>
                <label htmlFor="apiKey" style={styles.label}>OpenAI API Key:</label>
                <input 
                    type="text" 
                    id="apiKey"
                    placeholder="Enter OpenAI API Key"
                    value={apiKey}
                    onChange={handleApiKeyChange} 
                    style={styles.input} 
                    aria-label="OpenAI API Key"
                />
            </div>

            {/* Max Tokens */}
            <div style={styles.inputContainer}>
                <label htmlFor="maxTokens" style={styles.label}>Max Tokens:</label>
                <input 
                    type="number" 
                    id="maxTokens"
                    placeholder="Enter Max Tokens"
                    value={maxTokens}
                    onChange={handleMaxTokensChange} 
                    style={styles.input} 
                    aria-label="Max Tokens"
                />
            </div>

            {/* Temperature */}
            <div style={styles.inputContainer}>
                <label htmlFor="temperature" style={styles.label}>Temperature:</label>
                <input 
                    type="number" 
                    id="temperature"
                    placeholder="Enter Temperature (0 to 1)"
                    value={temperature}
                    onChange={handleTemperatureChange} 
                    style={styles.input} 
                    aria-label="Temperature"
                    step="0.01"
                    min="0"
                    max="1"
                />
            </div>
        </div>
    );
};

// Styles for better UI
const styles = {
    container: {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
    },
    header: {
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
        marginBottom: '10px',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '14px',
        color: '#333',
        display: 'block',
        marginBottom: '5px',
        textAlign: 'left',
    },
    input: {
        width: '95%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        fontFamily: 'Arial, sans-serif',
    }
};

export default LLMNode;

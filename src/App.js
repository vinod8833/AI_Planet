import React, { useState } from "react";
import { WorkflowProvider } from './context/WorkflowContext';
import WorkflowCanvas from './components/WorkflowCanvas';
import "./App.css"; // Ensure you have the CSS file for styles
import InputNode from './components/InputNode'; // Import InputNode here
import LLMNode from './components/LLMNode'; // Import LLMNode
import OutputNode from './components/OutputNode'; // Import OutputNode

const App = () => {
    const [showInputNode, setShowInputNode] = useState(false);
    const [showLLMNode, setShowLLMNode] = useState(false);
    const [showOutputNode, setShowOutputNode] = useState(false);
    const [output, setOutput] = useState('');

    const handleButtonClick = () => {
        setShowInputNode(true);
    };

    const handleLLMNodeClick = () => {
        setShowLLMNode(true);
    };

    const handleOutputNodeClick = () => {
        setShowOutputNode(true);
    };

    // Define handleDeploy function
    const handleDeploy = () => {
        console.log('Deploy button clicked');
        // Add your deploy logic here
        alert("Successfully deployed! You can now chat with AI Assistant.");
    };

    // Define handleRun function
    const handleRun = () => {
        console.log('Run button clicked');
        // Add your run logic here
    };

    // Handle the changes from LLMNode
    const handleApiKeyChange = (apiKey) => {
        console.log('API Key:', apiKey);
    };

    const handleMaxTokensChange = (maxTokens) => {
        console.log('Max Tokens:', maxTokens);
    };

    // Handle Output from LLMNode and update the output state
    const handleOutput = (outputData) => {
        setOutput(outputData);
    };

    return (
        <WorkflowProvider>
            <div className="App">
                {/* Header Section */}
                <header className="header">
                    {/* Logo */}
                    <div className="logo">
                        <img
                            src="/path-to-your-logo.png" // Update with your logo path
                            alt="OpenAGI"
                            className="logo-image"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="button-container">
                        <button className="button" onClick={handleDeploy}>Deploy</button>
                        <button className="run-button" onClick={handleRun}>Run</button>
                    </div>
                </header>

                {/* Main Content Section */}
                <div className="main-content">
                    {/* Sidebar Section */}
                    <aside className="sidebar">
                        <div className="component">Components</div>
                        <hr className="divider" />
                        <div className="drag-and-drop">Drag and Drop</div>
                        <button className="llm-engine" onClick={handleButtonClick}>
                            <img src="src/image/input.png" alt="Logo" className="logo" />
                            Input <span className="hamburger-icon">☰</span>
                        </button>
                        <button className="llm-engine" onClick={handleLLMNodeClick}>
                            <img src="src/image/input.png" alt="Logo" className="logo" />
                            LLM Engine <span className="hamburger-icon">☰</span>
                        </button>
                        <button className="output" onClick={handleOutputNodeClick}>
                            <img src="src/image/input.png" alt="Logo" className="logo" />
                            Output <span className="hamburger-icon">☰</span>
                        </button>
                    </aside>

                    {/* Workflow Canvas */}
                    <WorkflowCanvas />

                    {/* Show InputNode component when button is clicked */}
                    {showInputNode && <InputNode data={{ onChange: () => {} }} />}
                    {showLLMNode && <LLMNode data={{ onApiKeyChange: handleApiKeyChange, onMaxTokensChange: handleMaxTokensChange }} />}
                    {showOutputNode && <OutputNode output={output} />}
                </div>
            </div>
        </WorkflowProvider>
    );
};

export default App;
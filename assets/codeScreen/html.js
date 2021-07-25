// import codemirrorCSS from '../codemirror/css';
// import nightTheme from '../codemirror/nightTheme';

/* <style>
    ${codemirrorCSS}
</style>
<style>
    ${nightTheme}
</style> */

export default `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="user-scalable=0">
        <style>
            *, *:before, *:after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            html, body {
                height: 100%;
            }
            body {
                font-size: 3rem;
                color: #FFF;
                background-color: #2B47A4;
                display: flex;
                flex-direction: column;
            }
            header {
                position: sticky;
                top: 0;
                z-index: 5;
                background-color: #2B47A4;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 24px;
            }
            h1, p, a {
                font-size: 48px;
            }
            h1 {
                font-weight: 700;
            }
            p {
                font-weight: 400;
            }
            a {
                color: inherit;
                text-decoration: none;
                margin-right: 4px;
            }
            svg {
                height: 1.5em;
                width: 1.5em;
                vertical-align: middle;
            }
            .cm-editor {
                flex: 1;
                padding-bottom: 50vh;
            }
            .project {
                display: flex;
                align-items: center;
            }
        </style>
    </head>
    <body>
        <header>
            <div class="project">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                </a>
                <h1 id="projectName"></h1>
            </div>
            <p id="filename"></p>
        </header>
    </body>
</html>
`;

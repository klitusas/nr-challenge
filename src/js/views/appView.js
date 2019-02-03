import { elements } from '../views/base';

export const clearResults = () => {
    elements.header.innerHTML = '';
};

export const renderApp = () => {
    const markup = `
    <div>
    <h1>Apps by Host</h1>
    <h3>for user averylongemailaddress@companyname.com</h3>
    <form>
        <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <label for="checkbox" id="checkboxLabel">Show as a list</label>
        </div>
    </form>
    </div>
`;
    elements.header.innerHTML = markup;
};

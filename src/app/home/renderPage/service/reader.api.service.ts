import { Injectable } from '@angular/core';

export class Employee {
    ID!: number;
    FirstName!: string;
    LastName!: string;
    Position!: string;
    BirthDate!: string;
    HireDate!: string;
    Notes!: string;
    Address!: string;
    Phone!: string;
    Email!: string;
}

let employee: Employee = {
    ID: 1,
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    Notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    Address: "351 S Hill St., Los Angeles, CA",
    Phone: "360-684-1334",
    Email: "jheart@dx-email.com"
};

export class State {
    ID!: number;
    Name!: string;
}
let states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connecticut"
}];
let positions: string[] = [
];

let markup: string = `
    <h2>
        <img src="images/widgets/HtmlEditor.svg" alt="HtmlEditor">
        Formatted Text Editor (HTML Editor)
    </h2>
    <br>
    <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
    <p>Supported features:</p>
    <ul>
        <li>Inline formats:
            <ul>
                <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                <li>Font, size, color changes (HTML only)</li>
            </ul>
        </li>
        <li>Block formats:
            <ul>
                <li>Headers</li>
                <li>Text alignment</li>
                <li>Lists (ordered and unordered)</li>
                <li>Code blocks</li>
                <li>Quotes</li>
            </ul>
        </li>
        <li>Custom formats</li>
        <li>HTML and Markdown support</li>
        <li>Mail-merge placeholders (for example, %username%)</li>
        <li>Adaptive toolbar for working images, links, and color formats</li>
        <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
        <li>Copy-paste rich content (unsupported formats are removed)</li>
        <li>Tables support</li>
    </ul>
    <br>
    <p>Supported frameworks and libraries</p>
    <table>
        <tr>
            <td><strong>jQuery</strong></td>
            <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
        </tr>
        <tr>
            <td><strong>Angular</strong></td>
            <td style="text-align: right;">v7.0.x - v10.0.x</td>
        </tr>
        <tr>
            <td><strong>React</strong></td>
            <td style="text-align: right;">v16.2+</td>
        </tr>
        <tr>
            <td><strong>Vue</strong></td>
            <td style="text-align: right;">v2.6.3+</td>
        </tr>
    </table>
`;
export class Employee1 {
    id: number;

    firstName: string;

    lastName: string;

    gender: string;

    birthDate: Date;
}

const employees: Employee1[] = [];

const surnames: string[] = [
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Anderson',
    'Harris',
    'Clark',
    'Allen',
    'Scott',
    'Carter'];

const names: string[] = [
    'James',
    'John',
    'Robert',
    'Christopher',
    'George',
    'Mary',
    'Nancy',
    'Sandra',
    'Michelle',
    'Betty'];

const gender: string[] = ['Male', 'Female'];
let s = 123456789;
@Injectable()
export class Service {
    getMarkup(): string {
        return markup;
    }
    getEmployee(): Employee {
        return employee;
    }

    getPositions(): string[] {
        return positions
    }

    getStates(): State[] {
        return states;
    }
    random() {
        s = (1103515245 * s + 12345) % 2147483647;
        return s % (10 - 1);
    }

    generateData(count: number) {
        let i: number;
        const startBirthDate = Date.parse('1/1/1975');
        const endBirthDate = Date.parse('1/1/1992');

        for (i = 0; i < count; i++) {
            const birthDate = new Date(startBirthDate + Math.floor(
                this.random()
                * (endBirthDate - startBirthDate) / 10,
            ));
            birthDate.setHours(12);

            const nameIndex = this.random();
            const item = {
                id: i + 1,
                firstName: names[nameIndex],
                lastName: surnames[this.random()],
                gender: gender[Math.floor(nameIndex / 5)],
                birthDate,
            };
            employees.push(item);
        }

        // return { employees, totalCount: count };
        return employees
    }
}

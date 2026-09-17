import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-signature-dishes',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './signature-dishes.component.html',
    styleUrl: './signature-dishes.component.css'
})
export class SignatureDishesComponent {

    groups = [
        'Andhra cuisine',
        'Chicken dishes',
        'Seafood',
        'Vegetarian dishes'
    ];

    dishes = [
        {
            name: 'Rayalaseema Roast',
            note: 'A Matsya highlight — smoky, spice-forward Rayalaseema style.',
            image: '/images/food/rayalaseema-roast.jpg'
        },
        {
            name: 'Chicken Andhra',
            note: 'The house chicken preparation, cooked in classic Andhra spice.',
            image: '/images/food/chicken-andhra.jpg'
        },
        {
            name: 'Tandoori Roti',
            note: 'Charred straight from the tandoor, made to order.',
            image: '/images/food/tandoori-roti.jpg'
        },
        {
            name: 'Biryani',
            note: 'Slow-cooked, layered, and one of the most-ordered plates on the table.',
            image: '/images/food/biryani.jpg'
        }
    ];
}
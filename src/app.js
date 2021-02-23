import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        menu: [
            {
                name: 'Products',
                voice: ["Digital Painting", "Licensing & Education", "Mobile Apps", "Wacom Tablets"]
            }, 
            {
                name: "Brushes",
                voice: ["Painter", "ParticleShop", "Painter Essentials"],
            },
            {
                name: "Wacom Tablets"
            },
            {
                name: "Special Offers"
            },
            {
                name: "Free Trials"
            },
            {
                name:"Business"
            },
            {
                name: "Support",
                voice: ["Patches & Updates", "Knowledgebase", "View All"]
            },
            {
                name: "Learning",
                voice: ["Tutorials", "Tips & Tricks", "Artist Interviews", "Webinar Library"]
            }
        ]
    }
});
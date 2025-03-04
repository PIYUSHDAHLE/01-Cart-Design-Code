const data= [
    {
        "id": 1,
        "name": "John Doe",
        "image": "https://images.unsplash.com/photo-1700856417754-cb66c909f4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        "description": "A software engineer with 5 years of experience in web development."
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "image": "https://images.unsplash.com/photo-1687442723676-d685a5a85802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A graphic designer who specializes in branding and illustration."
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "image": "https://images.unsplash.com/photo-1686328946125-869563f89a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A project manager with a passion for agile methodologies."
    },
    {
        "id": 4,
        "name": "Bob Brown",
        "image": "https://images.unsplash.com/photo-1672761431799-5e91a0ae2f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        "description": "A data analyst with expertise in big data and machine learning."
    },
    {
        "id": 5,
        "name": "Carol White",
        "image": "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.webp?b=1&s=170667a&w=0&k=20&c=dvR7PyvMi-g2ET2KW4M__2uw7P-ienRj2kDzIZlaI20=",
        "description": "A content writer with a knack for creating engaging blog posts."
    }
]

const container =document.querySelector('main');
data.forEach(user =>{
    const card = document.createElement('div');

    card.innerHTML =`
    <div class="card">
            <img src="${user.image}" alt="NA">
            <h1>${user.name}</h1>
            <p>${user.description}</p>
          
        </div>`

        container.appendChild(card);
});
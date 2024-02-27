import React from 'react';
import "./blog.css";
import Image1 from '../../assets/technologies/Apache.png';
import Image2 from '../../assets/technologies/Bootstrap.png';
import Image3 from '../../assets/technologies/CSS.png';
import Image4 from '../../assets/technologies/express.png';
import Image5 from '../../assets/technologies/Figma.png';
import Image6 from '../../assets/technologies/Github.png';
import Image7 from '../../assets/technologies/HTML.png';
import Image8 from '../../assets/technologies/illustrator.png';
import Image9 from '../../assets/technologies/Java.png';
import Image10 from '../../assets/technologies/Javascript.png';
import Image11 from '../../assets/technologies/Laravel.png';
import Image12 from '../../assets/technologies/mongodb.png';
import Image13 from '../../assets/technologies/mysql.png';
import Image14 from '../../assets/technologies/NGINX.png';
import Image15 from '../../assets/technologies/Node.png';
import Image16 from '../../assets/technologies/Photoshop.png';
import Image17 from '../../assets/technologies/PHP.png';
import Image18 from '../../assets/technologies/React.png';
import Image19 from '../../assets/technologies/socketio.png';
import Image20 from '../../assets/technologies/Vue.png';
import Image21 from '../../assets/technologies/Csharp.png';
import Image22 from '../../assets/technologies/Dotnet.png';
import Image23 from '../../assets/technologies/Azure.png';


const technologies = [
    { id: 1, image: Image1, title: 'Apache' },
    { id: 2, image: Image2, title: 'Bootstrap' },
    { id: 3, image: Image3, title: 'CSS' },
    { id: 4, image: Image4, title: 'Express' },
    { id: 5, image: Image5, title: 'Figma' },
    { id: 6, image: Image6, title: 'Github' },
    { id: 7, image: Image7, title: 'HTML' },
    { id: 8, image: Image8, title: 'Illustrator' },
    { id: 9, image: Image9, title: 'Java' },
    { id: 10, image: Image10, title: 'JavaScript' },
    { id: 11, image: Image11, title: 'Laravel' },
    { id: 12, image: Image12, title: 'MongoDB' },
    { id: 13, image: Image13, title: 'MySQL' },
    { id: 14, image: Image14, title: 'NGINX' },
    { id: 15, image: Image15, title: 'Node' },
    { id: 16, image: Image16, title: 'Photoshop' },
    { id: 17, image: Image17, title: 'PHP' },
    { id: 18, image: Image18, title: 'React' },
    { id: 19, image: Image19, title: 'Socket.io' },
    { id: 20, image: Image20, title: 'Vue' },
    { id: 21, image: Image21, title: 'C#' },
    { id: 22, image: Image22, title: '.NET' },
    { id: 23, image: Image23, title: 'Azure' },
];

function Blog() {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Technologies</h2>
            <div className="blog__container grid">
                {technologies.map(tech => (
                    <div key={tech.id} className='blog__technology'>
                        <div className="blog__img-container">
                            <img src={tech.image} alt="" className="blog__img" title={tech.title} />
                        </div>
                        <h3 className="blog__title">{tech.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;

import BolitaInventario from "../classes/BolitaInvetario";

window.addEventListener('load', () => {
    const ballElements = document.querySelectorAll('.circleInv');
    const balls = [];

    ballElements.forEach((ballElement, index) => {
        const newBall = new BolitaInventario(ballElement, (index-1)*100, 0);
        balls.push(newBall);
    });

    let offsetX = 0;
    let offsetY = 0;

    balls.forEach(ball => {
        const ballElement = ball.getElement();
        
        ballElement.addEventListener('mousedown', (event) => {
            balls.forEach(ball => {
                ball.setSelected(false);
            });
            console.log(event)
            ball.setSelected(true);        
            offsetX = event.offsetX + 10; 
            offsetY = event.offsetY + 10;    
        });
    });

    document.addEventListener('mousemove', (event) => {
        balls.forEach(ball => {
            if(ball.isSelected()) {
                let x = event.clientX - (offsetX - (ball.getElement().offsetWidth/2));
                let y = event.clientY - (offsetY - (ball.getElement().offsetHeight/2));
                //console.log(event);
                ball.setX(x);
                ball.setY(y);
                ball.updatePosition();
            }
        });
    });

    document.addEventListener('mouseup', () => {
        balls.forEach(ball => {
            ball.setSelected(false);
        });       
        offsetX = 0;
        offsetY = 0;
    });

    console.log(balls);
});
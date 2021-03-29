import BolitaMovSelector from './BolitaMovSelector';

window.addEventListener('load', () => {
    const selectors = document.querySelectorAll('.movSelector');
    let balls = [];

    selectors.forEach((selector, index) => {
        const ball = new BolitaMovSelector(selector, (index-1)*100, 0);
        ball.updatePosition();
        balls.push(ball);
    });

    balls.forEach(ball => {
        const ballElement = ball.getElement();
        ballElement.addEventListener('click', (event) => {
            balls.forEach(ball => {
                ball.setSelected(false);
                ball.getElement().classList.remove('movSelector--selected');
            });
            ball.setSelected(true);            
            ballElement.classList.add('movSelector--selected');
        });
    });

    document.addEventListener('keydown', event => {
        balls.forEach(ball => {
            if(ball.isSelected()) {
                
                switch(event.key) {
                    case 'ArrowUp':
                        ball.setY(ball.getY() - 5);
                        break;

                    case 'ArrowDown':
                        ball.setY(ball.getY() + 5);
                        break;

                    case 'ArrowRight':
                        ball.setX(ball.getX() + 5);
                        break;

                    case 'ArrowLeft':
                        ball.setX(ball.getX() - 5);
                        break;
                }
                ball.updatePosition();
            }
        });
    });
});
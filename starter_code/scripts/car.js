class Car {
        constructor() {
            this.position = (width / 2) - 25;
          }
          moveLeft() {
            if (this.position >= 60) {
                this.position -= 10;
            }
          }
          moveRight() {
            if (this.position <= 290) {
                this.position += 10;
            }
    }
    drawCar() {
        const IMAGE_URL = 'images/car.png'
    
        const image = new Image();
        image.src = IMAGE_URL;
    
        image.addEventListener('load', () => {
            const imageHeight = image.height;
            const imageWidth = image.width;
            context.drawImage(image, this.position, height -90 , 50, 70);
            });
        }
}
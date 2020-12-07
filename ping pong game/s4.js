function restart() {
    ball.x = can.width / 2;
    ball.y = can.height / 2;
    ball.velX = -ball.velX;
    ball.speed = 5;
}

canvas.addEventListener("mousemove", getMousePos);

function getMousePos() {
    let rect = can.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;

}



function cpu_movement() {
    if (cpu.y < ball.y)
        cpu.y += 5;
    else
        cpu.y -= 5;
}

Mathematics:
    cpu.y += ((ball.y - (cpu.y + cpu.height / 2)));

Random:
    cpu.y = Math.random() * can.height;
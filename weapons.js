var weapons = [];

function Weapon(name,cooldown,bulletSize,damage,projectileSpeed,spread,shooterKnockback,targetKnockback,numberFired) {
    this.cooldown = cooldown;
    this.spread = spread;
    this.bulletSize = bulletSize;
    this.damage = damage;
    this.bulletSize = bulletSize;
    this.shooterKnockback = shooterKnockback;
    this.targetKnockback = targetKnockback;
    this.projectileSpeed = projectileSpeed;
    this.numberFired = numberFired;
    this.name = name;
    }
    
weapons['pistol'] = new Weapon('Pistol',20,10,18,10,0.01,0.2,0.4,1);
weapons['sir_razington_the_third'] = new Weapon('Raz',3,10,9,15,0.4,0.06,0.3,1);
weapons['sniper'] = new Weapon('Sniper',90,10,85,20,0.005,0.7,1.5,1);
weapons['shotgun'] = new Weapon('Shotgun',80,7,3.5,13,0.3,0.5,0.1,20);
weapons['callum'] = new Weapon('Cal',30,15,25,4,Math.PI,0.3,1.5,30);
    
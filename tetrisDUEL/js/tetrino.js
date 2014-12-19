var a = true;
var b = true;
var c = true;
var d = true;

function TetrinoL()
{
	this.state1 = [ [a, 0],
                    [b, 0],
                    [c, d] ];
					
	this.state2 = [ [0, 0, d],
                    [a, b, c] ];
					
	this.state3 = [ [d, c],
                    [0, b],
                    [0, a] ];
	
	this.state4 = [ [c, b, a],
                    [d, 0, 0] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -3;
}

function TetrinoJ()
{
	this.state1 = [ [0, a],
                    [0, b],
                    [d, c] ];
					
	this.state2 = [ [a, b, c],
                    [0, 0, d] ];
					
	this.state3 = [ [c, d],
                    [b, 0],
                    [a, 0] ];
	
	this.state4 = [ [d, 0, 0],
                    [c, b, a] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -3;
}

function TetrinoO()
{
	this.state1 = [ [a, b],
                    [c, d] ];
    
    this.state2 = [ [b, d],
                    [a, c] ];
    
    this.state3 = [ [d, c],
                    [b, a] ];
    
    this.state4 = [ [c, a],
                    [d, b] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

function TetrinoI()
{
	this.state1 = [ [a],
                    [b],
                    [c],
                    [d] ];
					
	this.state2 = [ [a,b,c,d] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 5;
	this.gridy = -4;
}

function TetrinoT()
{
	this.state1 = [ [a, b, c],
                    [0, d, 0] ];
					
	this.state2 = [ [c, 0],
                    [b, d],
                    [a, 0] ];
	
	this.state3 = [ [0, d, 0],
                    [c, b, a] ];
					
	this.state4 = [ [0, a],
                    [d, b],
                    [0, c] ];
					
	this.states = [ this.state1, this.state2, this.state3, this.state4 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

function TetrinoZ()
{
	this.state1 = [ [a, b, 0],
                    [0, c, d] ];
					
	this.state2 = [ [0, d],
                    [b, c],
                    [a, 0] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

function TetrinoS()
{
	this.state1 = [ [0, c, d],
                    [a, b, 0] ];
					
	this.state2 = [ [d, 0],
                    [c, b],
                    [0, a] ];
					
	this.states = [ this.state1, this.state2 ];
	this.curState = 0;
	
	this.color = 0;
	this.gridx = 4;
	this.gridy = -2;
}

function getRandomTetrino()
{
	var result = Math.floor( Math.random() * 7 );
	var tetrino;
	
	switch(result)
	{
		case 0: tetrino = new TetrinoL();		break;
		case 1: tetrino = new TetrinoO();		break;
		case 2: tetrino = new TetrinoZ();		break;
		case 3: tetrino = new TetrinoT();		break;
		case 4: tetrino = new TetrinoJ();		break;
		case 5: tetrino = new TetrinoS();		break;
		case 6: tetrino = new TetrinoI();		break;
	}	
	
	//tetrino.color = Math.floor(Math.random() * 8);
    tetrino.color = Math.floor(Math.random() * 8);
	return tetrino;
}
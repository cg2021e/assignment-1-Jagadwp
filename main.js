function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    var vertices1 = [
        // ATAS KARET PENGHAPUS KIRI
        -0.9262413741382, -0.0801076682883  ,0.27, 0.26, 0.26,     // D
        -0.7471120316662, 0.1049398953577   ,0.27, 0.26, 0.26,     // G
        -0.8627372789808, 0.1049398953577   ,0.27, 0.26, 0.26,     // F
        
        -0.9262413741382, -0.0801076682883  ,0.27, 0.26, 0.26,     // D
        -0.7471120316662, 0.1049398953577   ,0.27, 0.26, 0.26,     // G
        -0.7875877998883,-0.0785572394615   ,0.27, 0.26, 0.26,     // Q
        
        // DEPAN KARET PENGHAPUS KIRI
        -0.8976517125306, -0.1812864629679  ,0.15, 0.13, 0.15,     // P
        -0.7875877998883, -0.0785572394615  ,0.15, 0.13, 0.15,     // Q
        -0.9262413741382, -0.0801076682883  ,0.15, 0.13, 0.15,     // D
        
        // WADAH BAWAH KARET PENGHAPUS KIRI
        -0.7643422773141, -0.1882573077053  ,0.22, 0.21, 0.21,     // O
        -0.0931475102232, -0.084497808092   ,0.22, 0.21, 0.21,     // M
        -0.1346954519298, -0.1916907364028  ,0.22, 0.21, 0.21,     // N

        -0.7643422773141, -0.1882573077053  ,0.22, 0.21, 0.21,     // O
        -0.0931475102232, -0.084497808092   ,0.22, 0.21, 0.21,     // M
        -0.7873177740414, -0.084497808092   ,0.22, 0.21, 0.21,     // E
        
        -0.8976517125306, -0.1812864629679  ,0.15, 0.13, 0.15,     // P
        -0.7875877998883, -0.0785572394615  ,0.15, 0.13, 0.15,     // Q
        -0.7668961997217, -0.1812864629679  ,0.15, 0.13, 0.15,     // R
        
        // WADAH ATAS PENGHAPUS KIRI CREAM
        -0.7873177740414, -0.084497808092   ,0.81, 0.79, 0.64,     // E
        -0.1076044909627, -0.0278150182258  ,0.81, 0.79, 0.64,     // J
        -0.0931475102232, -0.084497808092   ,0.81, 0.79, 0.64,     // M
        
        -0.7873177740414, -0.084497808092   ,0.81, 0.79, 0.64,     // E
        -0.1076044909627, -0.0278150182258  ,0.81, 0.79, 0.64,     // J
        -0.7799438920148, -0.0278150182258  ,0.81, 0.79, 0.64,     // I
        
        // WADAH ATAS PENGHAPUS KIRI MERAH
        -0.7799438920148, -0.0278150182258  ,0.87, 0.08, 0.02,     //I
        -0.1347264625551, 0.0321388137151   ,0.87, 0.08, 0.02,     // K
        -0.1076044909627, -0.0278150182258  ,0.87, 0.08, 0.02,     // J
        
        -0.7799438920148, -0.0278150182258  ,0.87, 0.08, 0.02,     // I
        -0.1347264625551, 0.0321388137151   ,0.87, 0.08, 0.02,     // K
        -0.7656691701241, 0.0378487024714   ,0.87, 0.08, 0.02,     // H
        
        // WADAH ATAS PENGHAPUS KIRI HITAM
        -0.7656691701241, 0.0378487024714   ,0.09, 0.08, 0.07,     // H
        -0.1661308507146, 0.0978025344124   ,0.09, 0.08, 0.07,     // L
        -0.1347264625551, 0.0321388137151   ,0.09, 0.08, 0.07,     // K

        -0.7656691701241, 0.0378487024714   ,0.09, 0.08, 0.07,     // H
        -0.1661308507146, 0.0978025344124   ,0.09, 0.08, 0.07,     // L
        -0.7471120316662, 0.1049398953577   ,0.09, 0.08, 0.07,     // G
    ];

    var vertices2 = [
        // ATAS KARET KARET PENGHAPUS KANAN
        0.4464392048147, -0.1461525931796   ,0.27, 0.26, 0.26,   // U
        0.8243889555768, -0.1303045620828   ,0.27, 0.26, 0.26,   // C1
        0.5331657998223, -0.2661149798116   ,0.27, 0.26, 0.26,   // B1
        
        0.4464392048147, -0.1461525931796   ,0.27, 0.26, 0.26,   // U
        0.8243889555768, -0.1303045620828   ,0.27, 0.26, 0.26,   // C1
        0.7198876905941, -0.0239374098729   ,0.27, 0.26, 0.26,   // E1
        
        // KIRI BAWAH KARET PENGHAPUS KANAN
        0.4464392048147, -0.1461525931796   ,0.15, 0.13, 0.15,   // U
        0.5219188033328, -0.366871906005    ,0.15, 0.13, 0.15,   // A1
        0.4400706306713, -0.2433451746829   ,0.15, 0.13, 0.15,   // W
        
        0.4464392048147, -0.1461525931796   ,0.15, 0.13, 0.15,   // U
        0.5219188033328, -0.366871906005    ,0.15, 0.13, 0.15,   // A1
        0.5331657998223, -0.2661149798116   ,0.15, 0.13, 0.15,   // B1
        
        // BAWAH KARET PENGHAPUS KANAN
        0.5331657998223, -0.2661149798116   ,0.15, 0.13, 0.15,   // B1
        0.7936663176521, -0.2283174086448   ,0.15, 0.13, 0.15,   // D1
        0.5219188033328, -0.366871906005    ,0.15, 0.13, 0.15,   // A1
        
        0.5331657998223, -0.2661149798116   ,0.15, 0.13, 0.15,   // B1
        0.7936663176521, -0.2283174086448   ,0.15, 0.13, 0.15,   // D1
        0.8243889555768, -0.1303045620828   ,0.15, 0.13, 0.15,   // C1
        
        // WADAH KIRI PENGHAPUS KANAN
        0.2020284865347, 0.1263009505974    ,0.22, 0.21, 0.21,   // G1
        0.4461003062609, -0.1510366192156   ,0.22, 0.21, 0.21,   // V
        0.4399133039241, -0.2462653533512   ,0.22, 0.21, 0.21,   // Z
        
        0.2020284865347, 0.1263009505974    ,0.22, 0.21, 0.21,   // G1
        0.4461003062609, -0.1510366192156   ,0.22, 0.21, 0.21,   // V
        0.1828440406819, 0.2397174674433    ,0.22, 0.21, 0.21,   // H1
        
        // WADAH ATAS PENGHAPUS KANAN HITAM
        0.277822748174, 0.2718038447        ,0.09, 0.08, 0.07,   // I1
        0.4461003062609, -0.1510366192156   ,0.09, 0.08, 0.07,   // V
        0.1828440406819, 0.2397174674433    ,0.09, 0.08, 0.07,   // H1

        0.277822748174, 0.2718038447        ,0.09, 0.08, 0.07,   // I1
        0.4461003062609, -0.1510366192156   ,0.09, 0.08, 0.07,   // V
        0.5782564279559, -0.0791197755015   ,0.09, 0.08, 0.07,   // L1
        
        // WADAH ATAS PENGHAPUS KANAN MERAH
        0.5782564279559, -0.0791197755015   ,0.87, 0.08, 0.02,   // L1
        0.3483014847496, 0.2913425043447    ,0.87, 0.08, 0.02,   // J1
        0.277822748174, 0.2718038447        ,0.87, 0.08, 0.02,   // I1   

        0.5782564279559, -0.0791197755015   ,0.87, 0.08, 0.02,   // L1
        0.3483014847496, 0.2913425043447    ,0.87, 0.08, 0.02,   // J1
        0.6674990281567, -0.0413632908011   ,0.87, 0.08, 0.02,   // M1
        
        // WADAH ATAS PENGHAPUS KANAN CREAM
        0.6674990281567, -0.0413632908011   ,0.81, 0.79, 0.64,   // M1
        0.388774422585, 0.3011118341671     ,0.81, 0.79, 0.64,   // K1
        0.3483014847496, 0.2913425043447    ,0.81, 0.79, 0.64,   // J1

        0.6674990281567, -0.0413632908011   ,0.81, 0.79, 0.64,   // M1
        0.388774422585, 0.3011118341671     ,0.81, 0.79, 0.64,   // K1
        0.7242462902585, -0.0214738535408   ,0.81, 0.79, 0.64,   // P1
    ];
    
    var vertices = vertices1.concat(vertices2);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uTransformationMatrix;
        void main() {
            gl_Position = uTransformationMatrix * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        2, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    const btn = document.getElementById("myButton");

    btn.addEventListener("click", ()=>{
        freeze = !freeze;
        if (btn.innerText === "Move"){
            btn.innerText = "Stop";
            btn.style.backgroundColor = "#FF2626";
        } else {
            btn.innerText= "Move";
            btn.style.backgroundColor = "#66DE93";
        }
    });

    var uTransformationMatrix = gl.getUniformLocation(shaderProgram, 'uTransformationMatrix');
    
    var speed = 0.0132;
    var ty = 0;

    function render() {
        if (!freeze){
            if (ty >= 0.57 || ty <= -0.58) {
                speed = -speed;
            }
            ty += speed;
            
            var translationMatrixLeft = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0,
            ]);

            var translationMatrixRight = new Float32Array([
	        	1.0, 0.0, 0.0, 0.0,
	        	0.0, 1.0, 0.0, 0.0,
	        	0.0, 0.0, 1.0, 0.0,
	        	0.0, ty , 0.0, 1.0,
	        ]);
         
	        gl.clearColor(0.11, 0.05, 0.36, 1.0);
	        gl.clear(gl.COLOR_BUFFER_BIT);
        
            gl.uniformMatrix4fv(uTransformationMatrix, false, translationMatrixLeft);    
            gl.drawArrays(gl.TRIANGLES, 0, vertices1.length/5);
        
	    gl.uniformMatrix4fv(uTransformationMatrix, false, translationMatrixRight);
            gl.drawArrays(gl.TRIANGLES, vertices1.length/5, vertices2.length/5);
        }
        requestAnimationFrame(render);
    }   
    requestAnimationFrame(render);
}

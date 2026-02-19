class Cube3DCoords {
  constructor() {
    // Rotations
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;

    // Caméra
    this.camX = 0;
    this.camY = 0;
    this.camZ = -4;

    // Points du cube
    this.points = [
      [-1, -1, -1],
      [ 1, -1, -1],
      [ 1,  1, -1],
      [-1,  1, -1],
      [-1, -1,  1],
      [ 1, -1,  1],
      [ 1,  1,  1],
      [-1,  1,  1]
    ];

    // Arêtes
    this.edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7]
    ];

    // Faces (4 points)
    this.faces = [
      [0,1,2,3], // avant
      [4,5,6,7], // arrière
      [0,1,5,4], // bas
      [2,3,7,6], // haut
      [1,2,6,5], // droite
      [0,3,7,4]  // gauche
    ];
  }

  getInfo() {
    return {
      id: 'cube3dcoords',
      name: 'Cube 3D complet',
      color1: '#00A0FF',
      blocks: [

        // ROTATIONS RELATIVES
        {
          opcode: 'rotateX',
          blockType: Scratch.BlockType.COMMAND,
          text: 'tourner X de [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } }
        },
        {
          opcode: 'rotateY',
          blockType: Scratch.BlockType.COMMAND,
          text: 'tourner Y de [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } }
        },
        {
          opcode: 'rotateZ',
          blockType: Scratch.BlockType.COMMAND,
          text: 'tourner Z de [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } }
        },

        // ROTATIONS ABSOLUES
        {
          opcode: 'setRotX',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre rotation X à [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },
        {
          opcode: 'setRotY',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre rotation Y à [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },
        {
          opcode: 'setRotZ',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre rotation Z à [A]',
          arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },

        // CAMÉRA — SETTERS
        {
          opcode: 'setCamX',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre caméra X à [V]',
          arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },
        {
          opcode: 'setCamY',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre caméra Y à [V]',
          arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },
        {
          opcode: 'setCamZ',
          blockType: Scratch.BlockType.COMMAND,
          text: 'mettre caméra Z à [V]',
          arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: -4 } }
        },

        // CAMÉRA — GETTERS
        {
          opcode: 'getCamX',
          blockType: Scratch.BlockType.REPORTER,
          text: 'caméra X'
        },
        {
          opcode: 'getCamY',
          blockType: Scratch.BlockType.REPORTER,
          text: 'caméra Y'
        },
        {
          opcode: 'getCamZ',
          blockType: Scratch.BlockType.REPORTER,
          text: 'caméra Z'
        },

        // COORDONNÉES PROJETÉES
        {
          opcode: 'getX',
          blockType: Scratch.BlockType.REPORTER,
          text: 'x du point [I]',
          arguments: { I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },
        {
          opcode: 'getY',
          blockType: Scratch.BlockType.REPORTER,
          text: 'y du point [I]',
          arguments: { I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
        },

        // ARÊTES
        {
          opcode: 'edgeA',
          blockType: Scratch.BlockType.REPORTER,
          text: 'arête [E] point A',
          arguments: { E: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'edgeB',
          blockType: Scratch.BlockType.REPORTER,
          text: 'arête [E] point B',
          arguments: { E: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'edgeCount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'nombre arêtes'
        },

        // FACES
        {
          opcode: 'faceA',
          blockType: Scratch.BlockType.REPORTER,
          text: 'face [F] point A',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'faceB',
          blockType: Scratch.BlockType.REPORTER,
          text: 'face [F] point B',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'faceC',
          blockType: Scratch.BlockType.REPORTER,
          text: 'face [F] point C',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'faceD',
          blockType: Scratch.BlockType.REPORTER,
          text: 'face [F] point D',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },
        {
          opcode: 'faceCount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'nombre faces'
        },

        // PROFONDEUR DE FACE
        {
          opcode: 'faceDepth',
          blockType: Scratch.BlockType.REPORTER,
          text: 'profondeur face [F]',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },

        // LARGEUR DE FACE
        {
          opcode: 'faceWidth',
          blockType: Scratch.BlockType.REPORTER,
          text: 'largeur face [F]',
          arguments: { F: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
        },

        // INTERPOLATION
        {
          opcode: 'interpX',
          blockType: Scratch.BlockType.REPORTER,
          text: 'interp X entre point [A] et [B] à [T]',
          arguments: {
            A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            T: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
          }
        },
        {
          opcode: 'interpY',
          blockType: Scratch.BlockType.REPORTER,
          text: 'interp Y entre point [A] et [B] à [T]',
          arguments: {
            A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            T: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
          }
        }
      ]
    };
  }

  // ROTATIONS RELATIVES
  rotateX(args) { this.rotX += args.A * Math.PI / 180; }
  rotateY(args) { this.rotY += args.A * Math.PI / 180; }
  rotateZ(args) { this.rotZ += args.A * Math.PI / 180; }

  // ROTATIONS ABSOLUES
  setRotX(args) { this.rotX = args.A * Math.PI / 180; }
  setRotY(args) { this.rotY = args.A * Math.PI / 180; }
  setRotZ(args) { this.rotZ = args.A * Math.PI / 180; }

  // CAMÉRA SETTERS
  setCamX(args) { this.camX = args.V; }
  setCamY(args) { this.camY = args.V; }
  setCamZ(args) { this.camZ = args.V; }

  // CAMÉRA GETTERS
  getCamX() { return this.camX; }
  getCamY() { return this.camY; }
  getCamZ() { return this.camZ; }

  // TRANSFORMATION 3D
  transform(p) {
    var x = p[0], y = p[1], z = p[2];

    var cy = Math.cos(this.rotX), sy = Math.sin(this.rotX);
    var y1 = y * cy - z * sy;
    var z1 = y * sy + z * cy;

    var cx = Math.cos(this.rotY), sx = Math.sin(this.rotY);
    var x2 = x * cx + z1 * sx;
    var z2 = -x * sx + z1 * cx;

    var cz = Math.cos(this.rotZ), sz = Math.sin(this.rotZ);
    var x3 = x2 * cz - y1 * sz;
    var y3 = x2 * sz + y1 * cz;

    return [x3, y3, z2];
  }

  // PROJECTION
  project(p) {
    var x = p[0] - this.camX;
    var y = p[1] - this.camY;
    var z = p[2] - this.camZ;

    var scale = 80;
    var f = scale / (z + 4);

    return [x * f, y * f];
  }

  // COORDONNÉES PROJETÉES
  getX(args) {
    var i = args.I;
    if (i < 0 || i >= this.points.length) return 0;
    return this.project(this.transform(this.points[i]))[0];
  }

  getY(args) {
    var i = args.I;
    if (i < 0 || i >= this.points.length) return 0;
    return this.project(this.transform(this.points[i]))[1];
  }

  // ARÊTES
  edgeA(args) {
    var e = Number(args.E) - 1;
    if (e < 0 || e >= this.edges.length) return 0;
    return this.edges[e][0];
  }

  edgeB(args) {
    var e = Number(args.E) - 1;
    if (e < 0 || e >= this.edges.length) return 0;
    return this.edges[e][1];
  }

  edgeCount() {
    return this.edges.length;
  }

  // FACES
  faceA(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;
    return this.faces[f][0];
  }

  faceB(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;
    return this.faces[f][1];
  }

  faceC(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;
    return this.faces[f][2];
  }

  faceD(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;
    return this.faces[f][3];
  }

  faceCount() {
    return this.faces.length;
  }

  // PROFONDEUR MOYENNE D'UNE FACE
  faceDepth(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;

    var face = this.faces[f];
    var zsum = 0;

    for (var i = 0; i < 4; i++) {
      var p = this.points[face[i]];
      var t = this.transform(p);
      zsum += t[2];
    }

    return zsum / 4;
  }

  // LARGEUR PROJETÉE D'UNE FACE
  faceWidth(args) {
    var f = Number(args.F) - 1;
    if (f < 0 || f >= this.faces.length) return 0;

    var face = this.faces[f];
    var A = face[0];
    var B = face[1];

    var pA = this.project(this.transform(this.points[A]));
    var pB = this.project(this.transform(this.points[B]));

    var dx = pB[0] - pA[0];
    var dy = pB[1] - pA[1];

    return Math.sqrt(dx*dx + dy*dy);
  }

  // INTERPOLATION
  interpX(args) {
    var A = args.A, B = args.B, t = args.T;
    if (A < 0 || A >= this.points.length) return 0;
    if (B < 0 || B >= this.points.length) return 0;

    var pA = this.project(this.transform(this.points[A]));
    var pB = this.project(this.transform(this.points[B]));

    return pA[0] + t * (pB[0] - pA[0]);
  }

  interpY(args) {
    var A = args.A, B = args.B, t = args.T;
    if (A < 0 || A >= this.points.length) return 0;
    if (B < 0 || B >= this.points.length) return 0;

    var pA = this.project(this.transform(this.points[A]));
    var pB = this.project(this.transform(this.points[B]));

    return pA[1] + t * (pB[1] - pA[1]);
  }
}

Scratch.extensions.register(new Cube3DCoords());

<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      Search
      <div id="graph-container"></div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    beforeMount: () => {
    	/**
		 * This example shows the available edge label renderers for the canvas
		 * renderer.
		 */
		var i,
		    s,
		    N = 10,
		    E = 50,
		    g = {
		      nodes: [],
		      edges: []
		    };

		// Generate a random graph:
		for (i = 0; i < N; i++)
		  g.nodes.push({
		    id: 'n' + i,
		    label: 'Node ' + i,
		    x: Math.random(),
		    y: Math.random(),
		    size: Math.random(),
		    color: '#666'
		  });

		// Instantiate sigma:
		s = new sigma({
		  graph: g,
		  renderer: {
		    container: document.getElementById('graph-container'),
		    type: 'canvas'
		  },
		  settings: {
		    edgeLabelSize: 'proportional',
		    edgeLabelThreshold: 3,
		    minEdgeSize: 4
		  }
		});

		for (i = 0; i < E; i++) {
		  var source = 'n' + (Math.random() * N | 0),
		      target = 'n' + (Math.random() * N | 0);

		  if (!s.graph.adjacentNodes || s.graph.adjacentNodes(source).map(function(n) { return n.id; }).indexOf(target) === -1) {
		    s.graph.addEdge({
		      id: 'e' + i,
		      label: 'Edge ' + i,
		      source: source,
		      target: target,
		      size: Math.random(),
		      color: '#ccc',
		      type: ['line', 'curve', 'arrow', 'curvedArrow'][Math.random() * 4 | 0]
		    });
		  }
		}
		s.refresh();
    }
  }
</script

<style scoped>
#graph-container {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
</style>
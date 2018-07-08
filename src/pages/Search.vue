<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex xs12 md6>
          <v-text-field
            label="Company A"
            placeholder="Company Name"
            box
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            label="Company B"
            placeholder="Company Name"
            box
          ></v-text-field>
        </v-flex>
        <div id="graph-container" ref="graph"></div>
        </v-layout>
  </v-container>
</template>

<script>
export default {
    mounted: function() {
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
		console.log(this.$refs.graph)
		s = new sigma({
		  graph: g,
		  renderer: {
		    container: this.$refs.graph,
		    type: 'canvas'
		  },
		  settings: {
		    defaultLabelColor: '#fff',
		    edgeLabelSize: 'proportional',
		    edgeLabelThreshold: 3,
		    edgeLabelColor: '#fff',
		    minEdgeSize: 4
		  }
		});

		for (i = 0; i < E; i++) {
		  var source = 'n' + (Math.random() * N | 0),
		      target = 'n' + (Math.random() * N | 0);

		  if (!s.graph.adjacentNodes || s.graph.adjacentNodes(source).map(function(n) { return n.id; }).indexOf(target) === -1) {
		    s.graph.addEdge({
		      id: 'e' + i,
		      label: ['Apple','Microsoft','JIT Finance Co. Ltd','FInance Assets Management Limited','Zero Finance HK Limited','302 Limited','ACA Hill Limited','Brilliant Star Limited'][Math.random() * 4 | 0],
		      source: source,
		      target: target,
		      size: Math.random(),
		      color: '#ccc',
		      type: 'curve'
		    });
		  }
		}
		s.refresh();
    }
  }
</script>

<style scoped>
    #graph-container {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
    }
</style>
<script>
import "tui-grid/dist/tui-grid.css";
import { Grid } from "@toast-ui/vue-grid";
import axios from "axios";

export default {
  components: { grid: Grid },
  data() {
    return {
      rows: [
        { name: "Beautiful Lies", artist: "Birdy" },
        { name: "X", artist: "Ed Sheeran" },
      ],
      columns: [
        { title: "Name", name: "name" },
        {
          title: "Artist",
          name: "artist",
          formatter: function() {
            return "";
          },
        },
      ],
      options: {
        editingEvent: true,
        bodyHeight: 500,
        scrollX: true,
        scrollY: true,
        rowHeight: 15,
        rowHeaders: ["checkbox"],
      },
      dialog: false,
      selectedRow: null,
      inputTest: null,
    };
  },
};
</script>

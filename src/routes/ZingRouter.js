import { Router } from "express";
const router = Router();

import {
  getSong,
  // getDetailPlaylist,
  // getHome,
  // getTop100,
  // getChartHome,
  // getNewReleaseChart,
  // getInfo,
  // getArtist,
  // getArtistSong,
  // getLyric,
  // search,
  // getListMV,
  // getCategoryMV,
  // getVideo,
} from "../controllers/ZingController.js";

// getSong
router.get("/song", getSong);

// getDetailPlaylist
// router.get("/detailplaylist", getDetailPlaylist);

// // getHome
// router.get("/home", getHome);

// // getTop100
// router.get("/top100", getTop100);

// // getChartHome
// router.get("/charthome", getChartHome);

// // getNewReleaseChart
// router.get("/newreleasechart", getNewReleaseChart);

// // getInfoSong
// router.get("/infosong", getInfo);

// getArtist
// router.get("/artist", getArtist);

// getArtistSong
// router.get("/artistsong", getArtistSong);

// // getLyric
// router.get("/lyric", getLyric);

// // search
// router.get("/search", search);

// // getListMV
// router.get("/listmv", getListMV);

// // getCategoryMV
// router.get("/categorymv", getCategoryMV);

// // getVideo
// router.get("/video", getVideo);

// export default router;

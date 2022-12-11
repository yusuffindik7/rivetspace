import Svg, { Circle, Rect, Path, G } from "react-native-svg";

function Logo({ size, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 3465 3465"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <G
        transform="translate(0.000000,3465.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <Path
          d="M16745 32899 c-4358 -173 -8424 -2198 -11212 -5584 -2687 -3263
        -3945 -7504 -3477 -11725 459 -4144 2530 -7922 5757 -10502 3715 -2971 8566
        -4040 13165 -2902 3185 788 6046 2596 8149 5149 2687 3263 3945 7504 3477
        11725 -459 4144 -2530 7922 -5757 10502 -2725 2179 -6102 3361 -9562 3346
        -187 0 -430 -5 -540 -9z m4479 -9798 c26 -6 67 -13 90 -15 332 -37 437 -61
        773 -180 39 -13 89 -33 110 -44 21 -11 52 -22 68 -26 17 -3 57 -20 90 -36 33
        -16 98 -46 145 -66 47 -20 99 -42 115 -49 17 -7 46 -18 66 -24 20 -6 63 -28
        95 -47 33 -20 112 -64 178 -98 65 -33 135 -77 156 -97 25 -24 58 -43 95 -54
        69 -19 171 -68 199 -94 12 -10 32 -22 46 -26 14 -4 41 -18 60 -30 46 -29 298
        -165 306 -165 3 0 20 -11 38 -25 18 -14 66 -42 107 -63 41 -21 91 -48 112 -60
        21 -12 43 -22 50 -22 33 0 287 -197 287 -222 0 -4 15 -33 34 -65 65 -111 89
        -244 61 -339 -17 -61 -201 -436 -295 -604 -30 -52 -61 -111 -69 -130 -9 -19
        -39 -80 -67 -135 -131 -252 -215 -431 -249 -529 -17 -49 -37 -93 -45 -97 -8
        -5 -42 -20 -75 -35 -33 -15 -77 -38 -98 -51 -91 -57 -132 -75 -204 -89 -116
        -22 -194 -3 -379 92 -156 79 -200 109 -295 198 -42 39 -127 106 -190 149 -63
        43 -141 100 -174 127 -63 52 -126 95 -244 169 -39 24 -96 70 -128 103 -32 32
        -78 68 -103 80 -25 12 -64 35 -86 50 -23 15 -45 28 -48 28 -4 0 -35 18 -70 40
        -58 37 -172 83 -356 143 -57 19 -87 22 -245 22 l-180 0 -124 -48 c-164 -63
        -218 -97 -327 -209 -160 -165 -232 -304 -279 -539 -31 -157 -10 -405 45 -545
        33 -83 122 -210 168 -240 14 -9 44 -35 66 -57 54 -52 211 -178 259 -206 21
        -13 60 -42 87 -65 27 -22 86 -63 132 -90 46 -27 99 -59 118 -71 19 -12 76 -46
        125 -76 50 -29 115 -72 145 -95 94 -70 172 -121 260 -170 47 -25 103 -59 125
        -74 22 -15 75 -46 118 -70 43 -23 101 -64 130 -89 29 -27 99 -71 157 -100 58
        -30 112 -59 120 -66 8 -7 39 -25 68 -39 29 -15 74 -43 99 -62 26 -20 83 -54
        126 -76 44 -22 112 -61 151 -87 157 -105 216 -143 366 -232 47 -28 101 -65
        120 -83 50 -47 113 -94 205 -154 44 -28 98 -64 120 -78 22 -15 65 -50 96 -78
        31 -28 87 -73 123 -101 96 -72 248 -231 354 -372 50 -67 96 -124 101 -128 26
        -16 134 -161 161 -217 17 -35 41 -81 54 -103 13 -22 36 -74 51 -115 15 -41 42
        -109 60 -150 80 -180 114 -301 170 -597 19 -103 29 -195 35 -339 4 -109 6
        -203 4 -209 -2 -5 -8 -59 -13 -120 -33 -379 -117 -682 -315 -1127 -63 -142
        -89 -192 -122 -228 -12 -14 -29 -38 -37 -55 -8 -16 -27 -40 -41 -52 -14 -12
        -35 -41 -46 -63 -29 -57 -113 -175 -169 -236 -25 -27 -66 -75 -91 -105 -64
        -78 -136 -148 -205 -199 -33 -24 -91 -75 -129 -113 -38 -37 -83 -75 -99 -84
        -17 -8 -58 -36 -91 -62 -34 -26 -94 -66 -134 -90 -40 -23 -88 -55 -105 -71
        -18 -16 -53 -36 -77 -46 -24 -10 -80 -41 -125 -69 -45 -28 -113 -62 -151 -74
        -38 -13 -103 -39 -144 -58 -155 -73 -269 -115 -495 -182 -60 -18 -144 -44
        -185 -57 -74 -24 -231 -52 -405 -74 -118 -14 -206 -27 -280 -40 -33 -6 -136
        -15 -230 -21 -93 -5 -192 -14 -220 -20 -77 -16 -755 -23 -925 -10 -80 7 -212
        16 -295 21 -146 9 -273 23 -366 41 -26 4 -111 18 -190 29 -159 23 -209 34
        -254 55 -207 94 -315 162 -362 228 -23 33 -24 41 -25 198 -1 152 1 170 26 246
        32 96 71 167 181 328 131 193 139 205 199 335 61 131 206 427 231 470 23 41
        102 213 110 240 13 45 99 171 156 229 137 137 213 172 415 188 102 8 303 -41
        425 -103 36 -19 69 -34 72 -34 4 0 58 -20 120 -44 320 -127 671 -167 937 -107
        143 32 381 132 450 190 25 21 68 50 95 64 28 14 62 38 76 54 65 69 150 200
        174 267 14 39 39 98 56 131 29 59 59 210 59 299 0 47 -47 278 -65 323 -29 69
        -243 319 -321 375 -18 13 -79 60 -137 105 -57 45 -117 88 -133 95 -16 7 -65
        33 -109 59 -44 25 -105 59 -136 74 -34 16 -89 59 -140 108 -63 61 -114 99
        -199 147 -120 68 -217 136 -285 200 -54 51 -110 87 -240 155 -108 57 -185 107
        -268 174 -23 19 -71 54 -107 77 -36 24 -81 54 -100 67 -91 62 -274 180 -322
        208 -29 17 -64 44 -77 61 -13 17 -74 63 -135 104 -214 142 -351 246 -498 381
        -53 48 -142 129 -198 178 -188 166 -393 376 -445 455 -27 41 -61 93 -77 115
        -227 321 -334 557 -413 910 -14 66 -31 138 -36 160 -15 66 -32 470 -25 615 17
        383 55 605 154 900 25 74 53 167 62 205 17 65 123 288 168 352 11 15 34 57 52
        93 18 36 47 85 65 110 31 44 63 96 105 173 11 20 46 61 76 90 31 28 87 96 125
        149 57 80 86 110 163 166 51 38 113 94 137 123 94 113 152 161 294 240 39 22
        97 57 130 78 160 103 256 156 378 205 183 74 266 110 315 135 47 24 255 65
        437 86 28 4 70 11 95 16 128 27 670 34 784 10z m-9843 -136 c42 -24 89 -57
        105 -72 16 -16 57 -50 91 -77 35 -27 80 -72 102 -100 72 -92 262 -277 334
        -325 14 -9 41 -29 61 -45 53 -42 268 -144 350 -165 148 -40 215 -44 500 -37
        149 4 296 11 326 16 30 6 107 15 170 21 191 17 401 40 480 52 100 15 994 14
        1105 -1 399 -56 614 -105 925 -211 158 -53 260 -101 330 -152 61 -46 134 -92
        200 -127 30 -17 85 -61 122 -98 37 -38 79 -81 95 -95 92 -85 251 -320 298
        -438 12 -31 33 -74 47 -96 26 -42 62 -131 77 -193 5 -20 21 -77 36 -127 14
        -49 30 -126 35 -170 5 -44 17 -136 27 -205 15 -114 17 -267 17 -1710 1 -1728
        0 -1750 -53 -1895 -76 -208 -100 -256 -161 -320 -26 -27 -64 -81 -85 -120 -58
        -106 -168 -210 -280 -266 l-90 -44 -140 1 c-118 0 -148 4 -190 21 -27 12 -84
        34 -125 51 -86 34 -144 66 -180 98 -14 12 -52 35 -85 52 -61 30 -128 80 -252
        187 -38 33 -98 83 -133 110 -112 88 -250 228 -298 300 -54 83 -78 156 -92 273
        -6 51 -10 514 -10 1127 -1 1083 1 1040 -41 1220 -24 105 -44 151 -84 195 -22
        25 -60 68 -83 96 -45 55 -142 113 -229 139 -57 16 -175 38 -294 55 -102 15
        -474 9 -506 -8 -11 -6 -51 -16 -89 -22 -172 -25 -350 -102 -383 -164 -7 -13
        -21 -28 -31 -32 -22 -11 -82 -85 -110 -137 -51 -93 -49 80 -54 -3858 -5 -3682
        -5 -3736 -38 -3824 -42 -113 -71 -155 -144 -214 -69 -55 -80 -60 -140 -66 -87
        -10 -165 0 -286 36 -118 35 -152 51 -193 89 -16 16 -74 49 -127 75 -54 25
        -132 72 -175 104 -43 32 -111 75 -151 95 -85 43 -163 93 -212 135 -19 17 -62
        44 -95 60 -33 16 -69 38 -80 48 -11 10 -40 34 -65 54 -25 20 -55 45 -67 55
        -12 11 -54 44 -94 74 -98 75 -148 126 -189 195 -19 32 -48 74 -63 94 -52 66
        -127 231 -147 326 -20 88 -20 162 -20 4779 0 4954 -1 4742 41 4899 28 103 116
        216 210 268 137 75 174 77 280 14z"
        />
      </G>
    </Svg>
  );
}

export { Logo };

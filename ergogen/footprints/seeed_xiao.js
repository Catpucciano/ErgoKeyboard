module.exports = {
  params: {
    designator: "DISP",
    side: "F",
    SCK: { type: "net", value: "SCK" },
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    CS: { type: "net", value: "CS" },
    show_optional: { type: "boolean", value: true },
  },
  body: (p) => {
    const standard = `
      (module xiao-ble (layer F.Cu) (tedit 621096A8)
        ${p.at /* parametric position */}
        ${"" /* Add the kicad_mod content here*/}
  (fp_text reference "${
    p.ref
  }" (at -19.3989 -11.28268) (layer "F.SilkS") hide (effects (font (size 0.889 0.889) (thickness 0.1016))))
  (fp_text value "xiao-ble" (at -19.8434 -0.29718) (layer "F.SilkS") hide (effects (font (size 0.6096 0.6096) (thickness 0.0762)))) 
  

  (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_line (start 3.556 8.7762) (end 3.5565 7.176) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -0.8382 -8.826) (end 0.8382 -8.826) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -0.8382 -5.778) (end 0.8382 -5.778) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start 3.9375 6.795) (end 5.5885 6.795) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start 1.524 -6.4638) (end 1.524 -8.1402) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -4.0132 -2.476) (end -2.413 -2.476) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start 5.9695 7.176) (end 5.969 8.7762) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start 5.2832 9.462) (end 4.2418 9.462) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -2.413 -0.063) (end -4.0132 -0.063) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -4.699 -0.7488) (end -4.699 -1.7902) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -2.032 -2.095) (end -2.032 -0.444) (layer "Edge.Cuts") (width 0.12))
  (fp_line (start -1.524 -6.4638) (end -1.524 -8.1402) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 5.2832 9.462) (mid 5.365391 8.858391) (end 5.969 8.7762) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -2.032 -0.444) (mid -2.143592 -0.174592) (end -2.413 -0.063) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 5.5885 6.795) (mid 5.857908 6.906592) (end 5.9695 7.176) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 1.524 -8.1402) (mid 0.920391 -8.222391) (end 0.8382 -8.826) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 3.5565 7.176) (mid 3.668092 6.906592) (end 3.9375 6.795) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 0.8382 -5.778) (mid 0.920391 -6.381609) (end 1.524 -6.4638) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -4.699 -0.7488) (mid -4.095391 -0.666609) (end -4.0132 -0.063) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -4.0132 -2.476) (mid -4.095391 -1.872391) (end -4.699 -1.7902) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start 3.556 8.7762) (mid 4.159609 8.858391) (end 4.2418 9.462) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -0.8382 -8.826) (mid -0.920391 -8.222391) (end -1.524 -8.1402) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -2.413 -2.476) (mid -2.143592 -2.364408) (end -2.032 -2.095) (layer "Edge.Cuts") (width 0.12))
  (fp_arc (start -1.524 -6.4638) (mid -0.920391 -6.381609) (end -0.8382 -5.778) (layer "Edge.Cuts") (width 0.12))
  (pad "1" smd oval (at -8.56996 -7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "2" smd oval (at -8.56996 -5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "3" smd oval (at -8.56996 -2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "4" smd oval (at -8.56996 0 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "5" smd oval (at -8.56996 2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "6" smd oval (at -8.56996 5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "7" smd oval (at -8.56996 7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "8" smd oval (at 8.56996 7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "9" smd oval (at 8.56996 5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "10" smd oval (at 8.56996 2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "11" smd oval (at 8.56996 0) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "12" smd oval (at 8.56996 -2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "13" smd oval (at 8.56996 -5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "14" smd oval (at 8.56996 -7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask"))
  (pad "15" thru_hole circle (at -1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "16" thru_hole circle (at 1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "18" thru_hole circle (at 1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "19" thru_hole circle (at -4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "20" thru_hole circle (at -4.445 -2.222 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "21" thru_hole circle (at 3.81 9.208 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
  (pad "22" thru_hole circle (at 5.715 9.208 180) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
)

      `;
    return `
        ${standard}
       				)
      `;
  },
};

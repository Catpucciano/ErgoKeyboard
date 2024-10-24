module.exports = {
  params: {
    designator: "MCU",
    orientation: "down",
    VCC5: { type: "net", value: "VCC5" },
    GND: { type: "net", value: "GND" },
    VCC3: { type: "net", value: "VCC3" },
    RST: { type: "net", value: "RST" },
    RAW: { type: "net", value: "RAW" },
    BAT: { type: "net", value: "BAT+" },
    BATG: { type: "net", value: "BAT-" },
    CLK: { type: "net", value: "CLK" },
    DIO: { type: "net", value: "DIO" },
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
    P10: { type: "net", value: "P10" },
  },
  body: (p) => {
    const standard = `
        footprint "xiao-ble" (layer "F.Cu") (tedit 61D90095) 
        ${p.at /* parametric position */} 
        (attr smd exclude_from_pos_files) 
        (fp_text reference "${p.ref}" (at -19.3989 -11.28268 ${
          p.rot
        }) (layer "F.SilkS") ${
          p.ref_hide
        } (effects (font (size 0.889 0.889) (thickness 0.1016))) (tstamp 1c479411-a194-4685-8eeb-e81966c16c7f)) 
        (fp_text value "" (at -19.8434 -0.29718 ${
          p.rot
        }) (layer "F.SilkS") hide (effects (font (size 0.6096 0.6096) (thickness 0.0762))) (tstamp d811e9ac-fc59-4c9b-8d93-83a5a9c048b6)) 
        (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 116e44aa-10c6-4541-8b90-5b7a2f5434bd)) 
        (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a1111a45-eeef-42a4-8ca2-b88859685c82)) 
        (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a6f271d5-ba8a-454d-80cb-5f2f863f2343)) 
        (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp bb88374b-bed5-4557-ac17-b524808b3664)) 
        (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp f5248a36-36cb-4bf1-a463-d1ff91adf3ac))
        `;

    function pins(def_neg, def_pos) {
      return `
      ${p.at /*Reset button side*/} 
      (pad "0" thru_hole oval (at ${def_pos}7.62 7.62 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.P6.str})
      (pad "1" thru_hole oval (at ${def_pos}7.62 5.08 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P5.str})
      (pad "2" thru_hole oval (at ${def_pos}7.62 2.54 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P4.str})
      (pad "3" thru_hole oval (at ${def_pos}7.62 0 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P3.str})
      (pad "4" thru_hole oval (at ${def_pos}7.62 -2.54 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P2.str})
      (pad "5" thru_hole oval (at ${def_pos}7.62 -5.08 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P1.str})
      (pad "6" thru_hole oval (at ${def_pos}7.62 -7.62 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P0.str})
      ${p.at /*VCC Side Pins*/}
      (pad "13" thru_hole oval (at ${def_neg}7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.VCC5.str})
      (pad "12" thru_hole oval (at ${def_neg}7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.GND.str})
      (pad "11" thru_hole oval (at ${def_neg}7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.VCC3.str})
      (pad "10" thru_hole oval (at ${def_neg}7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P10.str})
      (pad "9" thru_hole oval (at ${def_neg}7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P9.str})
      (pad "8" thru_hole oval (at ${def_neg}7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P8.str})
      (pad "7" thru_hole oval (at ${def_neg}7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)${p.P7.str})

      ${p.at /*Center 4 Pins*/}
      (pad "14" thru_hole circle (at ${def_neg}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.CLK})
      (pad "15" thru_hole circle (at ${def_pos}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.DIO})
      (pad "16" thru_hole circle (at ${def_neg}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.GND})
      (pad "17" thru_hole circle (at ${def_pos}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.RST})

      ${p.at /*Battery Pins*/}
      (pad "18" thru_hole circle (at ${def_pos}4.445 -0.317 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BATG})
      (pad "19" thru_hole circle (at ${def_pos}4.445 -2.222 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BAT})

      
    `;
    }
    if (p.orientation == "up") {
      return `(
        ${standard}
        ${pins("-", "")}
        )
        `;
    } else {
      return `(
        ${standard}
        ${pins("", "-")}
        )
        `;
    }
  },
};

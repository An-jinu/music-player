const shadowColor = (x: number, y: number, blur: number, opacity: number) => `${x}px ${y}px ${blur}px rgba(26, 30, 35, ${opacity})`;

export const Effect = {
  /** 표 위에서 나타나는 팝업 사용 */
  /** 0px 2px 6px rgba(26, 30, 35, 0.08), 0px 4px 12px rgba(26, 30, 35, 0.16)  */
  Shadow01: `${shadowColor(0, 2, 6, 0.08)}, ${shadowColor(0, 4, 12, 0.16)}`,
  /** 카드 또는 드롭다운 메뉴 사용 */
  /** 0px 4px 12px rgba(26, 30, 35, 0.08), 0px 8px 24px rgba(26, 30, 35, 0.2) */
  Shadow02: `${shadowColor(0, 4, 12, 0.08)}, ${shadowColor(0, 8, 24, 0.2)}`,
  /** 다이얼로그에서 사용 */
  /** 0px 8px 12px rgba(26, 30, 35, 0.1), 0px 16px 40px rgba(26, 30, 35, 0.3) */
  Shadow03: `${shadowColor(0, 8, 12, 0.1)}, ${shadowColor(0, 16, 40, 0.3)}`,
};

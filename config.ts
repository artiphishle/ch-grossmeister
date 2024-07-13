import type {IAnkhCmsConfig} from "ankh-cms";

export const config: IAnkhCmsConfig = {
  styles: [
    // Html
    ['body', 'height', '100%'],
    ['html', 'margin', '0'],
    ['html', 'padding', '0'],

    // Body
    ['body', 'height', '100%'],
    ['body', 'margin', '0'],
    ['body', 'padding', '0'],
  ],
  pages: [
    {
      name: 'home',
      components: [
        {
          name: 'Image',
          styles: [
            // Image
            ["img", "max-height", "100%"],
            ["img", "margin", "auto"],
            ["img", "position", "absolute"],
            ["img", "top", "0"],
            ["img", "right", "0"],
            ["img", "bottom", "0"],
            ["img", "left", "0"],
          ],
          target: "b"
        }
      ],
    },
  ],
};
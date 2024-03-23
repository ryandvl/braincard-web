import translations from "@/translations";
import { Locale } from "@/types/locales";

let translator: Translator;

interface PlaceholderOptionsProps {
  holders: string[];
  places: any;
}

class Translator {
  locale: Locale;
  locales: string[];
  types: string[];
  translations: any;

  constructor(locale?: Locale) {
    this.locale = locale ?? "en-US";

    this.locales = [];
    this.types = [];
    this.translations = {};

    this.loadTranslations();
  }

  loadTranslations() {
    for (var locale in translations) {
      this.locales.push(locale);

      var localeObject = translations[locale as never] as any;

      for (var type in localeObject) {
        var typeObject = localeObject[type];

        this.translations[locale] = typeObject;

        !this.types.includes(type) && this.types.push(type);
      }
    }
  }

  public translate = (stringPath: string, replaceParams: any = {}) => {
    const errorMessage = "{" + stringPath + "}";

    var typeSplit = stringPath.split(":");
    if (!this.types.includes(typeSplit[0])) return errorMessage;

    var paramsSplit = typeSplit[1].split(".");

    let file = this.translations[this.locale][typeSplit[0]];
    for (var path of paramsSplit) file = file?.[path] ?? {};

    if (typeof file !== "string") return errorMessage;

    let translation: string = file;

    translation = this.setPlaceholders(translation, replaceParams);

    return translation;
  };

  private setPlaceholders(string: string, replaceParams: any = {}) {
    let translation: string = string;

    translation = Translator.setPlaceholder(translation, {
      holders: ["%", ""],
      places: {
        bar: " | ",
        double_arrow: " » ",
        arrow: " › ",
        ball: " • ",
      },
    });

    translation = Translator.setPlaceholder(translation, {
      holders: ["{", "}"],
      places: {
        ...replaceParams,
      },
    });

    return translation;
  }

  public static setPlaceholder(
    content: string,
    options: PlaceholderOptionsProps
  ) {
    var [enterHold, closeHold] = options.holders,
      regExp = new RegExp(`${enterHold}\\w+${closeHold}`, "g");

    return content.replace(regExp, (word) => {
      word = word.slice(enterHold.length, word.length - closeHold.length);

      return options.places[word] ?? enterHold + "error" + closeHold;
    });
  }
}

async function init() {
  if (translator) return;

  translator = new Translator();
}

(async () => {
  await init();
})();

export function getTranslator() {
  return translator.translate;
}

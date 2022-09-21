import "../Team/Team.css";
import Instal from "../../components/Sections/install";
const Team = () => {
  const data = [
    {
      name: "Norchen Mezni",
      place: "CEO",
      image:
        "data:image/jpeg;base64,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",
      description:
        " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Sed",
    },
  ];
  return (
    <section id="content" className="section-team container">
      <div className="team_wrapper mt-20">
        <div id="main" className="team__article">
          <div className="team__title">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ml-20">
              Terms &amp; Conditions
            </h1>
          </div>

          <div className="team_content ">
            <div className="item__team">
              <div className="team__column ml-20">
                <div className="item__title">
                  <h3>
                    You can find our Privacy Policy <a id="here">here</a>
                  </h3>
                </div>
                <div className="item_text">
                  <h3>PLEASE READ THESE LICENSE TERMS CAREFULLY</h3>
                  <div>
                    <span id="spanv">
                      PURCHASES YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE TO
                      THESE TERMS STOP USING THE APP AND UNINSTALL IT, AS WELL
                      AS DO NOT PROCEED TO MAKE IN-APP PURCHASES.
                    </span>
                  </div>
                  <div>
                    <h4 className="mt-10">
                      We are Additional E-Tafakna Sarl , a private company duly
                      registered and incorporated under the laws of the State of
                      Tunis, Tunisia,
                    </h4>
                  </div>
                  <div>
                    <h4 className="mt-10">We license you to use:</h4>
                  </div>
                  <div>
                    <p>
                      ● The E-Tafakna App, i.e. mobile application software
                      (excluding the object code and source code), the data
                      supplied with this software, and any updates or
                      supplements to it.
                    </p>
                    <p>
                      ● The related online or electronic documentation
                      (“Documentation”).
                    </p>
                    <p>
                      ● The related dispute resolution services (“Dispute
                      Resolution Services”)
                    </p>
                  </div>
                  <h4 className="mt-10">as permitted in these terms.</h4>
                  <p className="mt-10">
                    We take our responsibilities as a provider of app-based
                    legal products and services seriously.
                    <br /> This means that, in particular, we will:
                  </p>
                  <div className="mt-3 ml-6">
                    <p>
                      ● give you clear and accurate information on costs,
                      subscription services and costs, and any additional add-on
                      costs;
                    </p>
                    <p>
                      ● make it clear where there is an in-app promotion of
                      paid-for content or promotion of any other product or
                      service;
                    </p>
                    <p>
                      ● make sure that both paid and free products and services
                      are presented clearly and given equal prominence;
                    </p>
                    <p>
                      ● only take payments from you with your knowledge and
                      express authorization.
                    </p>
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  YOUR PRIVACY
                </h1>
                <p className="mt-6">
                  We only use any personal data we collect through your use of
                  the App in the ways set out <br /> in our Privacy Policy
                </p>
                <p className="mt-3">
                  Please be aware that internet transmissions are never
                  completely private or secure and that any message or
                  information you send using the App may be read or intercepted
                  by others, even if there is a special notice that a particular
                  transmission is encrypted.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  ADDITIONAL TERMS FOR SPECIFIC SERVICES
                </h1>
                <p className="mt-6">
                  Our App may be installed and/or downloaded on mobile phones,
                  tablets and other portable or handheld devices (“the
                  Devices”). When you download, install or use our App on any
                  such device, as well as when you purchase any content
                  available therein (“in-App content”), you agree to be bound by
                  and adhere to the present End – User License Agreement
                  specifically governing and regulating the use of the App, as
                  well as our Privacy Statement. These documents constitute the
                  entire agreement between our Company and you.
                </p>
                <p className="mt-3">
                  Apps developed by us may be available for downloading and
                  installation on a number of online platforms, or online
                  application stores (“App Stores”) including, without
                  limitation, AppStore and Google Play, in respect of which
                  independent sets of terms and conditions of use apply
                  regarding use of their respective services.
                </p>
                <p className="mt-3">
                  When you download, install or use our App via such App Stores,
                  the ways in which you use the aforesaid App and Documentation
                  shall also be governed and regulated by the respective App
                  Store’s Terms and Conditions of Use and which shall apply in
                  addition to our Privacy Statement and our End–User License
                  Agreement. In the event that there is any discrepancy between
                  the respective App Store’s Terms and Conditions of Use and the
                  present End–User License Agreement and our Privacy Statement,
                  the respective App Store’s Terms and Conditions of Use shall
                  apply.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  SUPPORT FOR THE APP AND HOW TO TELL US ABOUT PROBLEMS
                </h1>
                <p className="mt-6">
                  Support.If you want to learn more about the App or have any
                  problems using it please <br />
                  contact us at support@e-tafakna.com
                </p>
                <p className="mt-3">
                  Contact us (including with complaints). If you think the App
                  is faulty or mis-described or any other reason please email
                  our customer service team at support@e-tafakna.com
                </p>
                <p className="mt-3">
                  How we will communicate with you. If we have to contact you we
                  will do so by email using the contact details you have
                  provided to us.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  CHANGES TO THESE TERMS
                </h1>
                <p className="mt-6">
                  We may need to change these terms to reflect changes in law or
                  best practice or to deal with additional features which we may
                  introduce.
                </p>
                <p className="mt-3">
                  We will do our best to notify you of a change.
                </p>
                <p className="mt-3">
                  If you do not accept the notified changes you may continue to
                  use the App and the Service in accordance with the existing
                  terms, but certain new features may not be available to you.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  UPDATE TO THE APP
                </h1>
                <p className="mt-6">
                  From time to time we may provide an update of the App to
                  improve performance, enhance functionality, reflect changes to
                  the operating system or address security issues. We may ask
                  you to update the App for these reasons.
                </p>
                <p className="mt-3">
                  If you choose not to install such updates or if you opt out of
                  automatic updates you may not be able to continue using the
                  App.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  WE MAY COLLECT TECHNICAL DATA ABOUT YOUR DEVICE
                </h1>
                <p className="mt-6">
                  By using the App or any of the Services, you agree to us
                  collecting and using technical information about the devices
                  you use the App on and related software, hardware and
                  peripherals to improve our products, as stipulated and
                  described in further detail in our Privacy Statement.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  LICENSE RESTRICTIONS
                </h1>
                <p className="mt-6">You agree that you will:</p>
                <p className="mt-3">
                  ● not copy the App, Documentation, except as part of the
                  normal use of the App or where it is necessary for the purpose
                  of back-up or operational security;
                </p>
                <p className="mt-3">
                  ● not translate, merge, adapt, vary, alter or modify, the
                  whole or any part of the App, Documentation nor permit the App
                  or any part of them to be combined with, or become
                  incorporated in, any other programs, except as necessary to
                  use the App on devices as permitted in these terms;
                </p>
                <p className="mt-3">
                  ● not disassemble, de-compile, reverse engineer or create
                  derivative works based on the whole or any part of the App nor
                  attempt to do any such things, except to the extent that such
                  actions cannot be prohibited because they are necessary to
                  decompile the App to obtain the information necessary to
                  create an independent program that can be operated with the
                  App or with another program (hereinafter “the Permitted
                  Objective”), and provided that the information obtained by you
                  during such activities:
                </p>
                <p className="mt-3 ml-10">
                  ○ is not disclosed or communicated without our prior written
                  consent to any third party to whom it is not necessary to
                  disclose or communicate it in order to achieve the Permitted
                  Objective; and
                </p>
                <p className="mt-3 ml-10">
                  ○ is not used to create any software that is substantially
                  similar in its expression to the App;
                </p>
                <p className="mt-3 ml-10">○ is kept secure; and</p>
                <p className="mt-3 ml-10">
                  ○ is used only for the Permitted Objective;
                </p>
                <p className="mt-3">
                  ● comply with all applicable technology control or export laws
                  and regulations that apply to the technology used or supported
                  by the App.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  ACCEPTABLE USE RESTRICTIONS
                </h1>
                <p className="mt-6">You must:</p>
                <p className="mt-3">
                  ● not use the App in any unlawful manner, for any unlawful
                  purpose, or in any manner inconsistent with these terms, or
                  act fraudulently or maliciously, for example, by hacking into
                  or inserting malicious code, such as viruses, or harmful data,
                  into the App, or any operating system;
                </p>
                <p className="mt-3">
                  ● not infringe our intellectual property rights or those of
                  any third party in relation to your use of the App, including
                  by the submission of any material (to the extent that such use
                  is not licensed by these terms);
                </p>
                <p className="mt-3">
                  ● not transmit any material that is defamatory, offensive or
                  otherwise objectionable in relation to your use of the App;
                </p>
                <p className="mt-3">
                  ● not use the App in a way that could damage, disable,
                  overburden, impair or compromise our systems or security or
                  interfere with other users; and
                </p>
                <p className="mt-3">
                  ● not collect or harvest any information or data from the App,
                  any Service or our systems or attempt to decipher any
                  transmissions to or from the servers running the App or any
                  Service.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  INTELLECTUAL PROPERTY RIGHTS
                </h1>
                <p className="mt-6">
                  We retain all right, title and interest in and to our products
                  and services including without limitation software, images,
                  text, graphics, illustrations, logos, service marks,
                  trademarks, copyrights photographs, videos and all related
                  intellectual property rights. You may not reproduce, modify,
                  enhance, or create derivative works of any of our products and
                  services. You may not sell, sublicense, distribute, display,
                  publish or edit any of our services or products.
                </p>
                <p className="mt-10">
                  Subject to these terms and conditions, you are provided a
                  non-exclusive, non- transferable, revocable license to use the
                  services provided by the App. You are permitted under this
                  license to keep, for your personal records, copies of the
                  documents you have created on the E-Tafakna App.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU
                </h1>
                <p className="mt-6">
                  We are responsible to you for foreseeable loss and damage
                  caused by us. If we fail to comply with these terms, we are
                  responsible for loss or damage you suffer that is a
                  foreseeable result of our breaking these terms or our failing
                  to use reasonable care and skill, but we are not responsible
                  for any loss or damage that is not foreseeable. Loss or damage
                  is foreseeable if either it is obvious that it will happen or
                  if, at the time you accepted these terms, both we and you knew
                  it might happen.
                </p>
                <p className="mt-3">
                  We do not exclude or limit in any way our liability to you
                  where it would be unlawful to do so. This includes liability
                  for death or personal injury caused by our negligence or the
                  negligence of our employees, agents or subcontractors or for
                  fraud or fraudulent misrepresentation.
                </p>
                <p className="mt-3">
                  When we are liable for damage to your property. If defective
                  digital content that we have supplied damages a device or
                  digital content belonging to you, we will either repair the
                  damage or pay you compensation. However, we will not be liable
                  for damage that you could have avoided by following our advice
                  to apply an update offered to you free of charge or for damage
                  that was caused by you failing to correctly follow
                  installation instructions or to have in place the minimum
                  system requirements advised by us.
                </p>
                <p className="mt-3">
                  We are not liable for business losses. The App is for domestic
                  and private use. If you use the App for any commercial,
                  business or resale purpose we will have no liability to you
                  for any loss of profit, loss of business, business
                  interruption, or loss of business opportunity.
                </p>
                <p className="mt-3">
                  Limitations to the App. Our App allows you to create, store
                  and share legal agreements (“Content”). While the App is
                  designed to facilitate the creation of such Content, you agree
                  that we are not legal advisors and we are not providing
                  specific legal advice to you by providing the Service. You
                  must obtain professional or specialist advice before taking,
                  or refraining from, any action on the basis of information
                  obtained from the App. Although we make reasonable efforts to
                  update the information provided by the App, we make no
                  representations, warranties or guarantees, whether expressed
                  or implied, that such information is accurate, complete or up
                  to date.
                </p>
                <p className="mt-3">
                  Please back-up content and data used with the App. We
                  recommend that you back up any content and data used in
                  connection with the App, to protect yourself in case of
                  problems with the App
                </p>
                <p className="mt-3">
                  Check that the App is suitable for you. The App has not been
                  developed to meet your individual requirements. Please check
                  that the facilities and functions of the App (as described on
                  the App Store site and in the Documentation) meet your
                  requirements.
                </p>
                <p className="mt-3">
                  We are not responsible for events outside our control. If our
                  support for the App is delayed by an event outside our control
                  then we will contact you as soon as possible to let you know
                  and we will take steps to minimize the effect of the delay.
                  Provided we do this we will not be liable for delays caused by
                  the event.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  WE MAY END YOUR RIGHTS TO USE THE APP IF YOU BREAK THESE TERMS
                </h1>
                <p className="mt-6">
                  We may end your rights to use the App at any time by
                  contacting you if you have broken these terms in a serious
                  way. If what you have done can be put right we will give you a
                  reasonable opportunity to do so.
                </p>
                <p className="mt-5">If we end your rights to use the App:</p>
                <p className="ml-10">
                  ● You must stop all activities authorized by these terms,
                  including your use of the App.
                </p>
                <p className="ml-10">
                  ● You must uninstall, delete or remove the App from all
                  Devices in your possession and immediately destroy all copies
                  of the App which you have and confirm to us that you have done
                  this.
                </p>
                <p className="ml-10">
                  ● We may remotely access your Devices and remove the App from
                  them.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  IF A COURT FINDS PART OF THIS CONTRACT ILLEGAL, THE REST WILL
                  CONTINUE IN FORCE
                </h1>
                <p className="mt-6">
                  Each of the paragraphs of these terms operates separately. If
                  any court or relevant authority decides that any of them are
                  unlawful, the remaining paragraphs will remain in full force
                  and effect.
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
                  APPLICABLE LAW AND JURISDICTION
                </h1>
                <p className="mt-6">
                  The validity, construction and performance of the present
                  agreement shall be governed by the laws of the State of Tunis,
                  Tunisia. Any dispute arising or relating to this agreement
                  shall be subject to the non-exclusive jurisdiction of the
                  courts of the State of Tunis.
                </p>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
      <Instal />
    </section>
  );
};

export default Team;

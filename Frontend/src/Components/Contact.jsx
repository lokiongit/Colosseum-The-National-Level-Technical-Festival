import React from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="bg-black text-white bg-opacity-85" id='contact'>
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-4  font-serif p-5 text-4xl"
          >
            CONTACT US
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=College of Technology,Pantnagar+(Location)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              className="w-full h-full lg:max-h-[510px]"
              title="Pantnagar Location"
              allowFullScreen
            ></iframe>
            <form
              action="#"
              className="flex flex-col gap-4 lg:max-w-sm text-white"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium text-white"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="white"
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium text-white"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="white"
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-white"
                >
                  Your Email
                </Typography>
                <Input
                  color="white"
                  size="lg"
                  placeholder="colo4cot@gmail.com"
                  name="email"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-white"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="white"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button className="w-full" color="gray">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

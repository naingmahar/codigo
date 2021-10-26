//
//  ButtonModule.m
//  CodeTest
//
//  Created by TZEAN on 26/10/2021.
//

#import "ButtonModule.h"
#import <React/RCTLog.h>
@implementation ButtonModule


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(addCount:(NSString *)count callback: (RCTResponseSenderBlock)callback)
{
  NSInteger a = [count integerValue];
  a = a + 1;
  callback(@[@(a)]);
}

@end
